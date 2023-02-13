<script>
import UsersList from '@/components/Users/UsersList.vue';
import { createUsers } from '@/utils';
import SearchInput from '@/components/SearchInput.vue';
import IconUserPlus from '@/components/icons/IconUserPlus.vue';
import DialogCreateUser from '@/components/Dialog/DialogCreateUser.vue';
import { eventBus, eventBusEvents } from "@/eventBus";

export default {
  name: 'UsersView',
  data() {
    return {
      state: {
        searchValue: '',
        headerSticky: false,
        users: createUsers(20)
      }
    };
  },
  computed: {
    /**
     * @returns {import('@/types').User[]}
     */
    usersFiltered() {
      const { users } = this.state;
      const searchValue = this.state.searchValue.toLowerCase();

      return users.filter(user => {
        const { firstName, lastName } = user;
        return (
            firstName.toLowerCase().includes(searchValue) ||
            lastName.toLowerCase().includes(searchValue)
        );
      });
    },
    usersCount() {
      return this.usersFiltered.length;
    }
  },
  created() {

  },
  mounted() {
    window.addEventListener('scroll', this.windowScrollHandler);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.windowScrollHandler);
  },
  methods: {
    /**
     * @param {Event} e
     */
    windowScrollHandler(e) {
      this.state.headerSticky = e.target.scrollingElement.scrollTop > this.$refs.usersView__header.offsetHeight;
    },
    /**
     * @param {import('@/types').User} user
     */
    editUserHandler(user) {
    },
    /**
     * @param {import('@/types').User} user
     */
    deleteUserHandler(user) {
      this.state.users = this.state.users.filter(_user => _user.id !== user.id);
    },
    openDialogCreateUser() {
      this.$refs.dialogCreateUser.show();
    },
    /**
     * @param {import("@/types").User} user
     */
    userCreatedHandler(user) {
      this.state.users.unshift(user);

      eventBus.$emit(eventBusEvents.NOTIFY,
          {
            type: "success",
            message: `User ${user.firstName} ${user.lastName} was create successfully.`
          }
      );

      this.$refs.dialogCreateUser.close();
    }
  },
  components: { DialogCreateUser, IconUserPlus, SearchInput, UsersList }
};
</script>

<template>
  <div class="usersView">
    <div
        ref="usersView__header"
        class="usersView__header"
        :class="{ 'sticky': state.headerSticky }"
    >
      <p
          v-show="state.headerSticky"
          class="text-center text--nice header--primary m-0"
      >
        Users count: <span>{{ usersCount }}</span>
      </p>
      <SearchInput v-model="state.searchValue"/>
      <button
          class="btn btn--secondary uppercase flex gap--1 items-center"
          @click="openDialogCreateUser"
      >
        <IconUserPlus class="icon--md"/>
        <span>Create User</span>
      </button>
    </div>

    <div class="usersView__list">
      <UsersList
          :users="usersFiltered"
          @edit-user="editUserHandler"
          @delete-user="deleteUserHandler"
      />
    </div>

    <DialogCreateUser
        ref="dialogCreateUser"
        :on-user-created="userCreatedHandler"
    />
  </div>
</template>