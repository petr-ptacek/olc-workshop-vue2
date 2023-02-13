import { mixinDialog } from './dialog.js';

export const mixinDialogUser = {
  mixins: [mixinDialog],
  methods: {
    /** @param {Required<import('@/types').UserEditable>} data */
    formSubmitHandler(data) {
      throw new Error('Not implemented');
    },
    /**
     * @returns {void}
     */
    formCancelHandler() {
      this.close();
      this.$emit('close');
    }
  }
};