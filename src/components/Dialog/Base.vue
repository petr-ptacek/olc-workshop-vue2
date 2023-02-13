<script>
import IconXMark from '@/components/icons/IconXMark.vue';

export default {
  name: 'BaseDialog',
  props: {
    disableCloseButton: {
      type: Boolean,
      required: false
    }
  },
  created() {
    window.addEventListener('keydown', this.windowKeydownHandler);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.windowKeydownHandler);
    window.document.body.style.removeProperty('overflow');
  },
  methods: {
    /**
     * @param {KeyboardEvent} e
     */
    windowKeydownHandler(e) {
      if ( e.code === 'Escape' ) {
        this.$emit('close');
        window.document.body.style.removeProperty('overflow');
      }
    },
    show() {
      const dialogEl = /** @type {HTMLDialogElement} */ this.$el;
      dialogEl.showModal();
      window.document.body.style.overflow = 'hidden';
    },
    close() {
      const dialogEl = /** @type {HTMLDialogElement} */ this.$el;
      dialogEl.close();
      window.document.body.style.removeProperty('overflow');
    },
    closeHandler() {
      this.close();
      this.$emit('close');
    }
  },
  components: { IconXMark }
};
</script>

<template>
  <dialog class="dialog">
    <div class="dialog__actions">
      <button
          v-if="!disableCloseButton"
          class="btn btn--transparent btn--icon btn--danger btn-action-close" @click="closeHandler"
      >
        <IconXMark class="icon--md" />
      </button>
    </div>

    <!--CONTENT-->
    <div class="dialog__contentWrapper">
      <div class="dialog__header">
        <slot name="header" />
      </div>
      <div class="dialog__main">
        <slot />
      </div>
      <div class="dialog__footer">
        <slot name="footer" />
      </div>
    </div>
  </dialog>
</template>
