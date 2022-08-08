<template>
  <svg class="m-icon">
    <use :href="`#i-${iconName}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  name: 'MinjiIcon',
  props: ['iconName']
}
</script>

<style lang="scss" scoped>
.m-icon {
  width: 1em;
  height: 1em;
}
</style>