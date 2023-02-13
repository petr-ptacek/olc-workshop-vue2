<script>
import BaseModal           from './Base.vue';
import FormUser            from '@/components/Users/FormUser.vue';
import BaseDialog          from '@/components/Dialog/Base.vue';
// import { mixinDialogUser } from './mixins/dialogUser.js';

export default {
  name: 'DialogUserUpdate',
  // mixins: [mixinDialogUser],
  props: {
    user: {
      type: Object,
      required: true,
      validator: (user) => {
        return typeof user.firstName === 'string' && typeof user.lastName === 'string';
      }
    }
  },
  components: {
    BaseDialog,
    FormUser,
    BaseModal
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
      const user = Object.assign({}, this.user, data);
      this.$emit('user-updated', user);
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
</script>

<template>
  <BaseDialog
      class="dialog--userUpdate"
      ref="baseDialog"
      @close="closeHandler"
  >
    <template #header>
      <h1 class="header--primary text-center text--nice">Update User</h1>
    </template>

    <FormUser
        ref="formUser"
        :user="user"
        @submit="formSubmitHandler"
        @cancel="formCancelHandler"
    >
      <template #button-submit="{ clickHandler }">
        <button class="btn btn--success" @click="clickHandler">
          Update
        </button>
      </template>
    </FormUser>
  </BaseDialog>
</template>