<template>
  <div id="container" class="p-2">
    <strong>{{ name }}</strong>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>

    <div class=" w-full flex justify-between items-center">
      <div class=" text-green-900">Toi La</div>

      <div>
      <div>
        Thuong
      </div>
      <div>
        Thuong
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExploreContainer',
  props: {
    name: String
  }
});
</script>

<style scoped>
/* .items-center {
  color: brown;
} */

</style>
