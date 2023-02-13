<script>
import { mixinDialog } from './mixins/dialog.js';
import BaseDialog      from '@/components/Dialog/Base.vue';

export default {
  name: 'ThePrompt',
  props: {
    onConfirm: {
      type: Function,
      required: false
    },
    onCancel: {
      type: Function,
      required: false
    },
    message: {
      type: String,
      required: false,
      default: ''
    }
  },
  mounted() {
    mixinDialog.mounted.call(this);
  },
  methods: {
    show() {
      mixinDialog.methods.show.call(this);
    },
    close() {
      mixinDialog.methods.close.call(this);
    },
    closeHandler() {
      mixinDialog.methods.closeHandler.call(this);
    },
    /**
     * @returns {void}
     */
    confirmHandler() {
      this.close();
      this.closeHandler();
      this.onConfirm?.();
    },
    /**
     * @returns {void}
     */
    cancelHandler() {
      this.close();
      this.closeHandler();
      this.onCancel?.();
    }
  },
  components: { BaseDialog }
};
</script>

<template>
  <BaseDialog
      ref="baseDialog"
      class="dialog--prompt"
      disable-close-button
      @close="closeHandler"
  >
    <p class="text-center text--nice header--secondary">
      {{ message }}
    </p>

    <template #footer>
      <button class="btn btn--success" @click="confirmHandler">Confirm</button>
      <button class="btn btn--warning" @click="cancelHandler">Cancel</button>
    </template>
  </BaseDialog>
</template>