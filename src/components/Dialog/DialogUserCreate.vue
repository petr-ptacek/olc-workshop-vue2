<script>
import BaseModal      from './Base.vue';
import FormUser       from '@/components/Users/FormUser.vue';
import BaseDialog     from '@/components/Dialog/Base.vue';
import { createUser } from '@/utils';
// import { mixinDialogUser } from './mixins/dialogUser.js';

export default {
  // mixins: [mixinDialogUser],
  name: 'DialogUserCreate',
  props: {
    onUserCreated: {
      type: Function,
      required: false
    }
  },
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
      const user = Object.assign({}, createUser(), data);
      this.onUserCreated?.(user);
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
  },
  components: {
    BaseDialog,
    FormUser,
    BaseModal
  }
};
</script>

<template>
  <BaseDialog
      class="dialog--userCreate"
      ref="baseDialog"
      @close="closeHandler"
  >
    <template #header>
      <h1 class="header--primary text-center text--nice">Create User</h1>
    </template>

    <FormUser
        ref="formUser"
        @submit="formSubmitHandler"
        @cancel="formCancelHandler"
    />
  </BaseDialog>
</template>