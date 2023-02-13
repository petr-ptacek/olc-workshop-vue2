<script>
import IconXMark from '@/components/icons/IconXMark.vue';

export default {
  name: 'BaseDialog',
  created() {
    window.addEventListener("keydown", this.windowKeydownHandler);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.windowKeydownHandler);
  },
  methods: {
    /**
     * @param {KeyboardEvent} e
     */
    windowKeydownHandler(e) {
      if (e.code === "Escape") {
        this.$emit("close");
      }
    },
    show() {
      const dialogEl = /** @type {HTMLDialogElement} */ this.$el;
      dialogEl.showModal();
    },
    close() {
      const dialogEl = /** @type {HTMLDialogElement} */ this.$el;
      dialogEl.close();
    },
    closeHandler() {
      this.close();
      this.$emit("close");
    }
  },
  components: { IconXMark }
};
</script>

<template>
  <dialog class="dialog" role="alertdialog">
    <div class="dialog__actions">
      <button class="btn btn--transparent btn--icon btn--danger btn-action-close" @click="closeHandler">
        <IconXMark class="icon--md"/>
      </button>
    </div>

    <!--CONTENT-->
    <div class="dialog__contentWrapper">
      <div class="dialog__header">
        <slot name="header"/>
      </div>
      <div class="dialog__main">
        <slot/>
      </div>
      <div class="dialog__footer">
        <slot name="footer"/>
      </div>
    </div>
  </dialog>
</template>
