<script>
import { createUsers } from '@/utils';
import UsersList from '@/components/Users/UsersList.vue';
import SearchInput from '@/components/SearchInput.vue';
import IconUserPlus from '@/components/icons/IconUserPlus.vue';
import { eventBus, eventBusEvents } from '@/eventBus';
import DialogUserCreate from '@/components/Dialog/DialogUserCreate.vue';
import DialogUserUpdate from '@/components/Dialog/DialogUserUpdate.vue';
import IconUsers from "@/components/icons/IconUsers.vue";
import IconUserCircle from "@/components/icons/IconUserCircle.vue";

export default {
  name: 'UsersView',
  data() {
    return {
      state: {
        searchValue: '',
        headerSticky: false,
        users: createUsers(16),
        dialogUserUpdate: {
          user: null
        },
        dialogUserCreate: {
          visible: false
        }
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

      return searchValue ?
          users.filter(({ firstName, lastName }) =>
              `${firstName} ${lastName}`.toLowerCase().includes(searchValue)
          ) :
          users;
    },
    /**
     * @returns {number}
     */
    usersCountFiltered() {
      return this.usersFiltered.length;
    },
    /**
     * @returns {number}
     */
    usersCount() {
      return this.state.users.length;
    }
  },
  watch: {
    /**
     * @param {number} value
     * @param {number} oldValue
     */
    usersCount(value, oldValue) {
      eventBus.$emit(eventBus.Events.PROMPT, {
        message: `Info: The users count was changed from ${oldValue} to ${value}`,
      });
    }
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
      this.state.headerSticky = window.scrollY > +this.$refs.usersView__header.offsetHeight;
    },
    /**
     * @param {import('@/types').User} user
     * @returns {void}
     */
    dialogUserUpdateOpen(user) {
      this.state.dialogUserUpdate.user = user;
    },
    /**
     * @returns {void}
     */
    dialogUserUpdateCloseHandler() {
      this.state.dialogUserUpdate.user = null;
    },
    /**
     * @returns {void}
     */
    dialogUserCreateOpen() {
      this.state.dialogUserCreate.visible = true;
    },
    /**
     * @returns {void}
     */
    dialogUserCreateCloseHandler() {
      this.state.dialogUserCreate.visible = false;
    },
    /**
     * @param {import('@/types').User} user
     */
    userCreatedHandler(user) {
      this.state.users.unshift(user);

      eventBus.$emit(eventBusEvents.NOTIFY,
          {
            type: 'success',
            message: `User ${user.firstName} ${user.lastName} was created.`
          }
      );

      this.state.dialogUserCreate.visible = false;
    },
    /**
     * @param {import('@/types').User} user
     */
    userDeletedHandler(user) {
      const onConfirm = () => {
        this.state.users = this.state.users.filter(_user => _user.id !== user.id);

        eventBus.$emit(eventBus.Events.NOTIFY, {
          type: 'success',
          message: `User ${user.firstName} ${user.lastName} was deleted.`
        });
      };

      eventBus.$emit(eventBusEvents.PROMPT, {
        message: `Do you want to delete ${user.firstName} ${user.lastName}?`,
        onConfirm
      });
    },
    /**
     * @param {import('@/types').User} user
     */
    userUpdatedHandler(user) {
      const idx = this.state.users.findIndex(u => u.id === user.id);
      if (idx < 0) {
        return;
      }

      // this.state.users[idx] = user;
      this.$set(this.state.users, idx, user);
      // this.state.users.splice(idx, 1, user);

      this.state.dialogUserUpdate.user = null;

      eventBus.$emit(eventBus.Events.NOTIFY, {
        type: 'success',
        message: 'User was updated.'
      });
    }
  },
  components: {
    IconUsers,
    IconUserCircle,
    DialogUserUpdate,
    DialogUserCreate,
    IconUserPlus,
    SearchInput,
    UsersList
  }
};
</script>

<template>
  <div class="usersView">
    <div
        ref="usersView__header"
        class="usersView__header"
        :class="{ 'sticky': state.headerSticky }"
    >
      <div
          v-show="state.headerSticky"
          class="text-center text--nice header--primary m-0"
      >
        <div>Users count: <span>{{ usersCountFiltered }}</span></div>
      </div>
      <SearchInput v-model="state.searchValue"/>
      <button
          class="btn btn--secondary uppercase flex gap--1 items-center"
          @click="dialogUserCreateOpen"
      >
        <IconUserPlus class="icon--md"/>
        <span>Create User</span>
      </button>
    </div>

    <div class="usersView__list">
      <UsersList
          :users="usersFiltered"
          @update-user="dialogUserUpdateOpen"
          @delete-user="userDeletedHandler"
      />
    </div>

    <DialogUserCreate
        v-if="state.dialogUserCreate.visible"
        :on-user-created="userCreatedHandler"
        @close="dialogUserCreateCloseHandler"
    />

    <DialogUserUpdate
        v-if="state.dialogUserUpdate.user"
        :user="state.dialogUserUpdate.user"
        @user-updated="userUpdatedHandler"
        @close="dialogUserUpdateCloseHandler"
    />
  </div>
</template>