<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MinjiCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass() {
      let {span, offset} = this;
      console.log(this);
      return [span && `col-${span}`, offset && `offset-${offset}`];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter/2 + 'px',
        paddingRight: this.gutter/2 + 'px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.col {
  //background: #E6A4B4;
  width: 50%;
  //border: 1px solid #C86B85;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: calc($n / 24) * 100%;
    }
  }
}
</style>