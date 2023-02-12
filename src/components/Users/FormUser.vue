<script>
export default {
  name: 'FormUser',
  props: {
    user: {
      type: Object,
      required: false,
      validator: (user) => {
        return typeof user.firstName === 'string' && typeof user.lastName === 'string';
      },
      default: () => ({
        firstName: '',
        lastName: ''
      })
    }
  },
  data() {
    return {
      state: {
        firstName: '',
        lastName: ''
      }
    };
  },
  created() {
    this.state.firstName = this.user.firstName;
    this.state.lastName = this.user.lastName;
  },
  methods: {
    /**
     * @returns {void}
     */
    submitHandler() {
      const { firstName, lastName } = this.state;

      this.$emit('submit', {
        firstName,
        lastName
      });
    },
    /**
     * @returns {void}
     */
    cancelHandler() {
      this.$emit('cancel');
    }
  }
};
</script>

<template>
  <form class="form form--user" @submit.prevent="submitHandler">
    <div class="form__content">
      <div class="formField formField--isRequired">
        <label class="formField__label text--nice" for="firstName">First Name</label>
        <input
            v-model="state.firstName"
            type="text"
            class="formField__input"
            id="firstName"
            required
            autocomplete="off"
        />
      </div>

      <div class="formField formField--isRequired">
        <label class="formField__label text--nice" for="lastName">Last Name</label>
        <input
            v-model="state.lastName"
            type="text"
            class="formField__input"
            id="lastName"
            required
            autocomplete="off"
        />
      </div>
    </div>

    <div class="form__actions">
      <button class="btn btn--success" type="submit">
        Create
      </button>

      <button class="btn btn--danger" type="button" @click="cancelHandler">
        Cancel
      </button>
    </div>
  </form>
</template>
