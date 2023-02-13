export const mixinDialog = {
  mounted() {
    this.show();
  },
  methods: {
    /**
     * @returns {void}
     */
    show() {
      this.$refs.baseDialog.show();
    },
    /**
     * @returns {void}
     */
    close() {
      this.$refs.baseDialog.close();
    },
    /**
     * @returns {void}
     */
    closeHandler() {
      this.$emit('close');
    }
  }
};