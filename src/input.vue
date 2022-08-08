<template>
  <div class="wrapper" :class="{error}">
    <input v-bind:value="value" type="text" :disabled="disabled" :readonly="readonly"
           @change="$emit('change', $event.target.value)" @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)" @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <Icon icon-name="attention" class="hint-icon"></Icon>
      <span class="hint-msg">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";

export default {
  components: {Icon},
  name: 'MinjiInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgb(0, 0, 0, 0.5);
$danger-50: #dd3434;
$primary-50: #6d5dd3;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 0.5em;
  }

  > input {
    height: $height;
    border: none;
    outline: none;
    color: rgb(50, 50, 50);
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    background: #F5F5F5;

    &:hover {
      background: #E4E4E4;
    }

    &:focus {
      border: 1.5px solid #9772FB;
      transition: 0.1s;
      background: white;
    }

    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
      background: #FAFAFA;
    }

    &[readonly] {
      cursor: not-allowed;
    }
  }

  &.error {
    > input {
      border-color: $danger-50;
    }

    .hint-icon {
      color: $danger-50;
    }

    .hint-msg {
      color: $danger-50;
    }
  }
}
</style>