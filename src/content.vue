<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MinjiContent'
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
.content {
  flex-grow: 1;
  background: #6d5dd3;
  color: #edebfa;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>