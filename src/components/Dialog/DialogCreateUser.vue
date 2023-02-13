<script>
import BaseModal from './Base.vue';
import FormUser from '@/components/Users/FormUser.vue';
import { UserService } from '@/service';
import BaseDialog from '@/components/Dialog/Base.vue';
import { createUser } from "@/utils";

export default {
  name: 'DialogCreateUser',
  props: {
    onUserCreated: {
      type: Function,
      required: false
    }
  },
  components: {
    BaseDialog,
    FormUser,
    BaseModal
  },
  data() {
    return {
      state: {}
    };
  },
  methods: {
    show() {
      this.$refs.baseDialog.show();
    },
    close() {
      this.$refs.baseDialog.close();
    },
    /** @param {Required<import('@/types').UserEditable>} data */
    async formSubmitHandler(data) {
      const user = Object.assign({}, createUser(), data);
      this.onUserCreated?.(user);
      this.$refs.formUser.reset();
    },
    /**
     * @returns {void}
     */
    formCancelHandler() {
      this.close();
      this.$refs.formUser.reset();
    },
    /**
     * @returns {void}
     */
    closeHandler() {
      this.$refs.formUser.reset();
    }
  }
};
</script>

<template>
  <BaseDialog
      class="dialog--createUser"
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