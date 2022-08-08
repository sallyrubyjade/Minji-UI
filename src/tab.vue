<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "MinjiTab",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0;
      }
    },
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'MinjiTabHead') {
        vm.$children.forEach((label) => {
          if(label.$options.name === 'MinjiTabLabel' && label.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, label);
          }
        })
      }
    })
  }
}

</script>

<style lang="scss" scoped>
$font-size: 14px;
.tab {
  font-size: $font-size;
}

</style>