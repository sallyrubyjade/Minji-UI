<template>
<div class="wrapper" :class="toastClasses">
  <div class="toast" ref="toast" :class="{[`${type}`]: true}">
    <div class="message">
      <slot></slot>
    </div>
    <div class="line" v-if="closeBtn" ref="line"></div>
    <span v-if="closeBtn" class="close" @click="onClickClose">
      {{closeBtn.text}}
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'MinjiToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 2
    },
    closeBtn: {
      type: Object,
      default() {
        // return {
        //   text: '关闭', callback: (toast) => {
        //     toast.close()
        //   }
        // }
        return null
      }
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0;
      }
    },
    type: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['normal', 'warning', 'danger', 'success'].indexOf(value.toLowerCase()) >= 0;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.closeBtn) {
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
      }
    })
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    close() {
      // 把元素从body里拿出
      this.$el.remove();
      this.$emit('close');
      this.$destroy();
    },
    onClickClose() {
      this.close();
      this.closeBtn.callback(this); // this === toast 实例
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: 600ms;
/* Warning */
$warning-50: #ffa942;
$warning-50-color: rgba(255, 169, 66, 0.95);
/* Danger */
$danger-50: #dd3434;
$danger-50-color: rgba(221, 52, 52,  0.95);
/* Success */
$success-70: #8CC152;
$success-70-color: rgba(140, 193, 82, 0.95);
@keyframes slide-up {
  0%{
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0%{
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);
  &.position-top {
    top: 10px;
    .toast {
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 10px;
    .toast {
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: fade-in $animation-duration;
    }
  }
}
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $toast-bg;
  //background: $warning-50;
  border-radius: 4px;
  color: white;
  padding: 0 16px;
  &.warning {
    background: $warning-50-color;
    .line {
      border-left: 1px solid #ececec;
    }
  }
  &.danger {
    background: $danger-50-color;
    .line {
      border-left: 1px solid #ececec;
    }
  }
  &.success {
    background: $success-70-color;
    .line {
      border-left: 1px solid #ececec;
    }
  }
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}

</style>