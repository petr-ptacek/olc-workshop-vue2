<script>
import UsersList from "@/components/Users/UsersList.vue";
import { createUsers } from "@/utils";

export default {
  name: "UsersView",
  data() {
    return {
      state: {
        users: createUsers(3)
      }
    }
  },
  components: { UsersList }
}
</script>

<template>
  <div class="usersView">
    <div class="usersView__list">
      <UsersList :users="state.users"/>
    </div>
  </div>
</template>
