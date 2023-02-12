<script>
import IconXMark from '@/components/icons/IconXMark.vue';

export default {
  name: 'BaseDialog',
  components: { IconXMark },
  props: {
    loaderVisible: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      const dialogEl = /** @type {HTMLDialogElement} */ this.$el;
      dialogEl.showModal();
    },
    close() {
      const dialogEl = /** @type {HTMLDialogElement} */ this.$el;
      dialogEl.close();
    }
  }
};
</script>

<template>
  <dialog class="dialog" style="position: relative;">
    <div class="dialog__actions">
      <button class="btn btn--transparent btn--icon btn--danger btn-action-close" @click="close">
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

    <TheLoader :visible="loaderVisible" />
  </dialog>
</template>
