<template>
  <div class="tab-label" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MinjiTabLabel",
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  },
  methods: {
    onClick() {
      this.eventBus.$emit('update:selected', this.name, this);
    }
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
$highlight-color: #6d5dd3;
$font-size: 14px;
.tab-label{
  font-size: $font-size;
  flex-shrink: 0;
  padding: 0 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  &.active {
    color: $highlight-color;
    font-weight: bold;
  }
}
</style>