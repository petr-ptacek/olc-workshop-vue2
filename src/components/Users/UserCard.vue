<script>
import IconTrash from '@/components/icons/IconTrash.vue';
import IconPencil from '@/components/icons/IconPencil.vue';

export default {
  name: 'UserCard',
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
      const { firstName, lastName } = this.user;
      return `${firstName} ${lastName}`;
    }
  }
};
</script>

<template>
  <div class="userCard">
    <div class="userCard__avatar">
      <img
          alt="some image"
          :src="user.avatar"
      >
    </div>
    <div class="userCard__meta">
      <div class="userCard__sex">

      </div>
      <div class="userCard__name">
        {{ fullName }}
      </div>
    </div>

    <div class="userCard__actions">
      <button
          class="btn btn--primary"
          @click="$emit('update', user)"
      >
        <IconPencil class="icon--sm"/>
      </button>
      <button
          class="btn btn--danger"
          @click="$emit('delete', user)"
      >
        <IconTrash class="icon--sm"/>
      </button>
    </div>
  </div>
</template>