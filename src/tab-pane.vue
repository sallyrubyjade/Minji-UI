<template>
  <div class="tab-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MinjiTabPane",
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: [Number, String],
      required: true
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  }
}

</script>

<style lang="scss" scoped>
$font-size: 14px;
.tab-pane{
  font-size: $font-size;
  padding: 1em;
  &.active {
  }
}
</style>