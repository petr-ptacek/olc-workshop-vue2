<script>
import { eventBus } from '@/eventBus';
import TheNotify from '@/components/Notify/App.vue';
import UsersView from '@/components/Users/UsersView.vue';
import ThePrompt from '@/components/Dialog/Prompt.vue';

export default {
  name: 'App',
  components: { ThePrompt, UsersView, TheNotify },
  data() {
    return {
      state: {
        prompt: {
          visible: false,
          props: {}
        },
        loader: {
          visible: false
        }
      }
    };
  },
  mounted() {
    eventBus.$on(eventBus.Events.NOTIFY, this.notifyMessage);
    eventBus.$on(eventBus.Events.PROMPT, this.showPrompt);

    const showLoader = () => (this.state.loader.visible = true);

    eventBus.$on(eventBus.Events.LOADER_SHOW, showLoader);

    const hideLoader = () => (this.state.loader.visible = false);

    eventBus.$on(eventBus.Events.LOADER_HIDE, hideLoader);

    this.$on("hook:beforeDestroy", () => {
      eventBus.$off(eventBus.Events.LOADER_HIDE, hideLoader)
      eventBus.$off(eventBus.Events.LOADER_SHOW, showLoader)
    })
  },
  beforeDestroy() {
    eventBus.$off(eventBus.Events.NOTIFY, this.notifyMessage);
    eventBus.$off(eventBus.Events.PROMPT, this.showPrompt);
  },
  methods: {
    /**
     * @param {import('@/types').NotifyPayload} data
     */
    notifyMessage(data) {
      this.$refs.notify.notify(data);
    },
    /**
     * @param {Object} props
     * @returns {void}
     */
    showPrompt(props) {
      this.state.prompt.props = props;
      this.state.prompt.visible = true;
    },
    /**
     * @returns {void}
     */
    promptCloseHandler() {
      this.state.prompt.visible = false;
      this.state.prompt.props = {};
    }
  }
};
</script>

<template>
  <div>
    <TheLoader :visible="state.loader.visible"/>
    <TheNotify ref="notify"/>
    <ThePrompt
        v-if="state.prompt.visible"
        v-bind="state.prompt.props"
        @close="promptCloseHandler"
    />

    <main class="container">
      <UsersView/>
    </main>
  </div>
</template>