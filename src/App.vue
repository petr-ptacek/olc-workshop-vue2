<script>
import { defineComponent } from 'vue';
import { eventBus } from "@/eventBus";
import TheNotify from "@/components/Notify/App.vue";
import UsersView from "@/components/Users/UsersView.vue";

export default defineComponent({
  name: 'App',
  components: { UsersView, TheNotify },
  computed: {
    /**
     * @returns {boolean}
     */
    isLoaderVisible() {
      return this.state.loader.counter > 0;
    }
  },
  data() {
    return {
      state: {
        loader: {
          counter: 0
        }
      }
    };
  },
  mounted() {
    eventBus.$on(eventBus.Events.LOADER_HIDE, this.hideLoader);
    eventBus.$on(eventBus.Events.LOADER_SHOW, this.showLoader);
    eventBus.$on(eventBus.Events.NOTIFY, this.notifyMessage);
  },
  beforeDestroy() {
    eventBus.$off(eventBus.Events.LOADER_HIDE, this.hideLoader);
    eventBus.$off(eventBus.Events.LOADER_SHOW, this.showLoader);
    eventBus.$on(eventBus.Events.NOTIFY, this.notifyMessage);
  },
  methods: {
    /**
     * @returns {void}
     */
    showLoader() {
      this.state.loader.counter++;
    },
    /**
     * @returns {void}
     */
    hideLoader() {
      this.state.loader.counter -= (this.state.loader.counter > 0) ? 1 : 0;
    },
    /**
     * @param {import("@/types").NotifyPayload} data
     */
    notifyMessage(data) {
      this.$refs.notify.notify(data);
    }
  },
});
</script>

<template>
  <div>
    <TheLoader :visible="isLoaderVisible"/>
    <TheNotify ref="notify"/>
    <main class="container">
      <UsersView/>
    </main>
  </div>
</template>