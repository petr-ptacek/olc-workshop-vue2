<script>
export default {
  name: 'FormUser',
  props: {
    user: {
      type: Object,
      required: false,
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
    },
    /**
     * @returns {void}
     **/
    reset() {
      this.state.firstName = "";
      this.state.lastName = "";
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
            autofocus
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
      <slot name="button-submit" :click-handler="submitHandler">
        <button class="btn btn--success" type="submit">
          Create
        </button>
      </slot>

      <button class="btn btn--danger" type="button" @click="cancelHandler">
        Cancel
      </button>
    </div>
  </form>
</template>
