<template>
  <button class="m-button" :class="{[`icon-${iconPosition}`]: true, [`${type}`]:true}" @click="$emit('click') ">
    <m-icon v-if="iconName && !loading" :icon-name="iconName"></m-icon>
    <m-icon v-if="loading" class="loading" icon-name="loading"></m-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from "./icon"

export default {
  // props: ['iconName', 'iconPosition']
  name: 'MinjiButton',
  components: {
    'm-icon': Icon
  },
  props: {
    iconName: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    },
    type: {
      type: String,
      default: 'tertiary',
      validator(val) {
        let value = val.toLowerCase();
        return ['primary', 'secondary', 'tertiary', 'warning', 'danger'].indexOf(value) >= 0;
      }
    }
  }
}
</script>


<style lang="scss" scoped>
$button-height: 36px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
/* Mono */
$mono-70: #13152c;
$mono-50: #313436;
$mono-30: #5b6063;
$mono-10: #ececec;
$mono-05: #f1f2f3;
$white: #ffffff;
/* Primary */
$primary-70: #4331b4;
$primary-50: #6d5dd3;
$primary-30: #a59be4;
$primary-10: #dad7f5;
$primary-05: #edebfa;
/* Warning */
$warning-70: #e69c45;
$warning-50: #ffa942;
$warning-05: #fff8ef;
/* Danger */
$danger-70: #bd2c2c;
$danger-50: #dd3434;
$danger-05: #feeaea;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  animation: spin 2s infinite linear;
}

.m-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em; /* 不用把宽度写死 */
  border-radius: $border-radius;
  background: $mono-10;
  color: $mono-70;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &.primary {
    background: $primary-50;
    color: $white;
  }

  &.primary:hover {
    background: $primary-70;
  }

  &.secondary {
    background: $mono-50;
    color: $white;
  }

  &.secondary:hover {
    background: $mono-70;
  }

  &.tertiary {
    background: $primary-05;
    color: $primary-50;
  }

  &.tertiary:hover {
    color: $primary-70;
    background: $primary-10;
  }

  &.warning {
    background: $warning-50;
    color: #333;
  }

  &.warning:hover {
    background: $warning-70;
  }

  &.danger {
    background: $danger-50;
    color: $white;
  }

  &.danger:hover {
    background: $danger-70;
  }

  &:focus {
    outline: none;
  }

  > .m-icon {
    order: 1;
    margin-right: 0.3em;
    margin-left: 0;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .m-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }

    > .content {
      order: 1;
    }
  }
}
</style>