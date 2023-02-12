<script>
import UserCard from "@/components/Users/UserCard.vue";

export default {
  name: "UsersList",
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
  components: { UserCard }
}
</script>

<template>
  <div class="usersList">
    <div class="usersList__header">
      <p>
        Users count: <span>{{ usersCount }}</span>
      </p>
    </div>

    <ul class="usersList__list">
      <li v-for="user in users"
          :key="user.id"
          class="usersList__listItem">
        <UserCard :user="user"/>
      </li>
    </ul>
  </div>
</template>
