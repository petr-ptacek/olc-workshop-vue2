<script>
import UserCard from '@/components/Users/UserCard.vue';

export default {
  name: 'UsersList',
  props: {
    users: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    /**
     * @returns {number}
     */
    usersCount() {
      return this.users.length;
    }
  },
  methods: {},
  components: { UserCard }
};
</script>

<template>
  <div class="usersList">
    <div class="usersList__header">
      <p class="text-center text--nice header--primary m-0">
        Users count: <span>{{ usersCount }}</span>
      </p>
    </div>

    <ul class="usersList__list">
      <li
          v-for="user in users"
          :key="user.id"
          class="usersList__listItem"
      >
        <UserCard
            :user="user"
            @edit="$emit('edit-user', user)"
            @delete="$emit('delete-user', user)"
        />
      </li>
    </ul>
  </div>
</template>
