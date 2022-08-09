<template>
  <div class="tab-head" ref="tabHead">
    <slot></slot>
    <div class="line" ref="line" ></div>
  </div>
</template>

<script>
export default {
  name: "MinjiTabHead",
  inject: ['eventBus'],
  mounted() {
    let tabHeadStyle = this.$refs.tabHead.getBoundingClientRect()
    this.eventBus.$on('update:selected', (name, vm) => {
      let {width, left} = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - tabHeadStyle.left}px`
    })
  }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$highlight-color: #6d5dd3;
$border-line-color: #ddd;
$font-size: 14px;
.tab-head{
  font-size: $font-size;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-line-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $highlight-color;
    transition: all 370ms;
  }
}
</style>