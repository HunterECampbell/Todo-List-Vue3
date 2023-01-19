<script lang="ts" setup>
const props = defineProps<{
  height?: string;
  size?: string;
  width?: string;
}>();
</script>

<template>
  <div
    class="my-card"
    :style="`height: ${props.size || props.height}; width: ${props.size || props.width}`"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.my-card {
  @extend .raised;
  @extend .rounded;

  background: white;
}
</style>
