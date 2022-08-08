<template>
  <div class="highlight" :class="{[`${type}`]: true}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MinjiHighlight',
  props: {
    type: {
      type: String,
      validator(val) {
        return ['unique', 'success', 'error', 'warning', 'info'].indexOf(val) >= 0;
      },
    }
  }

}
</script>


<style lang="scss" scoped>
$font-size: 14px;
$unique-bg: #A9E0F4;
$unique-color: #3AAFD9;
$success-bg: #9AE4D2;
$success-color: #37BE9C;
$warning-bg: #FFEBB8;
$warning-color: #FCBA40;
$error-bg: #F7B1B8;
$error-color: #DA4453;
$info-bg: #BBD5F7;
$info-color: #4B8ADD;

.highlight {
  font-size: $font-size;
  display: inline;
  border-radius: 2px;
  padding: 2px 4px;
  margin: 0 4px;
  font-weight: 500;
  &.unique {
    background: $unique-bg;
    color: $unique-color;
  }
  &.info {
    background: $info-bg;
    color: $info-color;
  }
  &.success {
    background: $success-bg;
    color: $success-color;
  }
  &.warning {
    background: $warning-bg;
    color: $warning-color;
  }
  &.error {
    background: $error-bg;
    color: $error-color;
  }
}
</style>