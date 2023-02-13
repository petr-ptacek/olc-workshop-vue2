<script>
import { defineComponent } from 'vue';
import { eventBus }        from '@/eventBus';
import TheNotify           from '@/components/Notify/App.vue';
import UsersView           from '@/components/Users/UsersView.vue';

export default defineComponent({
  name: 'App',
  components: { UsersView, TheNotify },
  data() {
    return {
      state: {}
    };
  },
  mounted() {
    eventBus.$on(eventBus.Events.NOTIFY, this.notifyMessage);
  },
  beforeDestroy() {
    eventBus.$on(eventBus.Events.NOTIFY, this.notifyMessage);
  },
  methods: {
    /**
     * @param {import('@/types').NotifyPayload} data
     */
    notifyMessage(data) {
      this.$refs.notify.notify(data);
    }
  }
});
</script>

<template>
  <div>
    <TheNotify ref="notify" />

    <main class="container">
      <UsersView />
    </main>
  </div>
</template>