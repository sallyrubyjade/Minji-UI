<template>
  <div class="footer" :style="footerStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MinjiFooter',
  props: {
    height: {
      type: [Number, String]
    }
  },
  computed: {
    footerStyle() {
      return {
        height: this.height + 'px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
.footer {
  background: #a59be4;
  color: #edebfa;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>