<script>
import BaseModal       from './Base.vue';
import FormUser        from '@/components/Users/FormUser.vue';
import { UserService } from '@/service';
import BaseDialog      from '@/components/Dialog/Base.vue';

export default {
  name: 'DialogCreateUser',
  props: {},
  components: {
    BaseDialog,
    FormUser,
    BaseModal
  },
  data() {
    return {
      state: {
        loaderVisible: false
      }
    };
  },
  methods: {
    show() {

    },
    close() {

    },
    async createUser() {

    },
    /** @param {Required<import('@/types').UserEditable>} data */
    async formSubmitHandler(data) {
      this.state.loaderVisible = true;
      const user = await UserService.create(data);
      this.state.loaderVisible = false;
    },
    formCancelHandler() {

    }
  }
};
</script>

<template>
  <BaseDialog
      class="modal--createUser"
      :loader-visible="state.loaderVisible"
  >
    <template #header>
      <h1 class="header--primary text-center text--nice">Create User</h1>
    </template>

    <FormUser

        @submit="formSubmitHandler"
        @cancel="formCancelHandler"
    />
  </BaseDialog>
</template>