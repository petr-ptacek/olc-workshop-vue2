<template>
  <div class="searchInput">
    <input
        v-model="$__value"
        class="searchInput__input"
        type="text"
        autocomplete="off"
    >
    <div class="searchInput__icon">
      <IconXMark v-if="$__value.length" class="icon--lg cursor-pointer" @click.native="$emit('input', '')" />
      <IconMagnifyingGlass v-else class="icon--lg" />
    </div>
  </div>
</template>

<script>
import IconMagnifyingGlass from '@/components/icons/IconMagnifyingGlass.vue';
import IconXMark           from '@/components/icons/IconXMark.vue';

export default {
  name: 'SearchInput',
  components: { IconXMark, IconMagnifyingGlass },
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    $__value: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      }
    }
  }
};
</script>