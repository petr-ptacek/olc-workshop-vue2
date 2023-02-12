<script>
import IconXMark from "@/components/icons/IconXMark.vue";

export default {
  name: "NotifyItem",
  components: { IconXMark },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    /**
     * @returns {string}
     */
    message() {
      return this.item.message;
    },
    /**
     * @returns {("success"|"error"|"warning")}
     */
    type() {
      return this.item.type;
    },
    /**
     * @returns {string}
     */
    classType() {
      return `notifyItem--${this.type}`;
    }
  }

}
</script>

<template>
  <div class="notifyItem" :class="classType">
    <div class="notifyItem__content">
      <div class="notifyItem__message">
        <slot :message="message">
          {{ message }}
        </slot>
      </div>
    </div>

    <div class="notifyItem__xIcon">
      <button class="btn btn--transparent btn--icon" @click="$emit('close', item)">
        <IconXMark/>
      </button>
    </div>
  </div>
</template>