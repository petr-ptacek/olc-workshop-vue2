<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RootComponent',
  data() {
    return {
      state: {
        counter: 0
      }
    };
  }
});
</script>

<template>
  <div>
    <h1>Counter {{ state.counter }}</h1>
  </div>
</template>