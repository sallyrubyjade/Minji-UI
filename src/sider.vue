<template>
  <div class="sider" :style="siderStyle">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MinjiSider',
  props: {
    width: {
      type: [Number, String]
    }
  },
  computed: {
    siderStyle() {
      return {
        width: this.width + 'px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
.sider {
  background: #9186de;
  color: #edebfa;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>