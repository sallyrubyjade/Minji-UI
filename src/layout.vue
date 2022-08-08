<template>
  <div class="layout" :class="layoutClass" :style="layoutStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MinjiLayout',
  props: {
    height: {
      type: [Number, String]
    },
    width: {
      type: [Number, String]
    }
  },
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      if(vm.$options.name === 'MinjiSider') {
        this.layoutClass.hasSider = true;
      }
    })
  },
  computed: {
    layoutStyle() {
      return {
        height: this.height + 'px',
        width: this.width + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
.layout {
  font-size: $font-size;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider{
    flex-direction: row;
  }
}
</style>