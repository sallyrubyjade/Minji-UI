<template>
  <div class="header" :style="headerStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MinjiHeader',
  props: {
    height: {
      type: [Number, String]
    }
  },
  computed: {
    headerStyle() {
      return  {
        height: this.height + 'px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
.header {
  background: #a59be4;
  color: #edebfa;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>