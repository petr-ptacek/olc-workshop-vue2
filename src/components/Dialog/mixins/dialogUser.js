export const mixinDialogUser = {
  mounted() {
    this.show();
  },
  methods: {
    show() {
      this.$refs.baseDialog.show();
    },
    close() {
      this.$refs.baseDialog.close();
    },
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
    },
    /**
     * @returns {void}
     */
    closeHandler() {
      this.$emit('close');
    }
  }
};