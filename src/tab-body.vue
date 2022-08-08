<template>
  <div class="tab-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MinjiTabBody",
  inject: ['eventBus'],
}

</script>

<style lang="scss" scoped>
$font-size: 14px;
.tab-body{
  font-size: $font-size;
}
</style>