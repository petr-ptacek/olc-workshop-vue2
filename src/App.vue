<script>
import { eventBus } from '@/eventBus';
import TheNotify    from '@/components/Notify/App.vue';
import UsersView    from '@/components/Users/UsersView.vue';
import ThePrompt    from '@/components/Dialog/Prompt.vue';

export default {
  name: 'App',
  components: { ThePrompt, UsersView, TheNotify },
  data() {
    return {
      state: {
        prompt: {
          visible: false,
          props: {}
        }
      }
    };
  },
  mounted() {
    eventBus.$on(eventBus.Events.NOTIFY, this.notifyMessage);
    eventBus.$on(eventBus.Events.PROMPT, this.showPrompt);
  },
  beforeDestroy() {
    eventBus.$on(eventBus.Events.NOTIFY, this.notifyMessage);
    eventBus.$on(eventBus.Events.PROMPT, this.showPrompt);
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
    <TheNotify ref="notify" />
    <ThePrompt
        v-if="state.prompt.visible"
        v-bind="state.prompt.props"
        @close="promptCloseHandler"
    />

    <main class="container">
      <UsersView />
    </main>
  </div>
</template>