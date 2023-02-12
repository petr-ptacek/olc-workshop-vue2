<script>
import IconTrash from "@/components/icons/IconTrash.vue";
import IconPencil from "@/components/icons/IconPencil.vue";

export default {
  name: "UserCard",
  components: { IconPencil, IconTrash },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    /**
     * @returns {string}
     */
    fullName() {
      const { firstName, lastName } = this.user

      return `${firstName} ${lastName}`
    }
  }
}
</script>

<template>
  <div class="userCard">
    <div class="userCard__avatar">
      <img
          alt="some image"
          :src="user.avatar">
    </div>
    <div class="userCard__meta">
      <div class="userCard__sex">

      </div>
      <div class="userCard__name">
        {{ fullName }}
      </div>
    </div>

    <div class="userCard__actions">
      <button class="btn btn--primary">
        <IconPencil class="icon--sm"/>
      </button>
      <button class="btn btn--danger">
        <IconTrash class="icon--sm"/>
      </button>
    </div>
  </div>
</template>


<!--
https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=
-->