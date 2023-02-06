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
  <div class="container">
    <p class="p-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus deleniti dicta ducimus eaque eius
      eveniet ex exercitationem fugiat hic, id, in iusto laboriosam nemo, neque numquam provident sequi tenetur.
    </p>
  </div>
</template>