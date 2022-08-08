<template>
  <div class="popover" ref="popover">
    <div v-if="visible" class="content-wrapper" ref="contentWrapper" :class="{[`position-${position}`]: true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MinjiPopover',
  data() {
    return {
      visible: false
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom', 'left', 'right'].indexOf(val) >= 0;
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(val) {
        return ['click', 'hover'].indexOf(val) >= 0;
      }
    }
  },
  mounted() {
    if (this.openEvent === 'click') {
      this.$refs.popover.addEventListener(this.openEvent, this.onClick);
    }else if (this.openEvent === 'mouseenter') {
      this.$refs.popover.addEventListener(this.openEvent, this.onEnter);
      this.$refs.popover.addEventListener("mouseleave", this.hoverClose);
    }
  },
  destroyed() {
    if (this.openEvent === 'click') {
      this.$refs.popover.removeEventListener(this.openEvent, this.onClick);
    }else if (this.openEvent === 'mouseenter') {
      this.$refs.popover.removeEventListener(this.openEvent, this.onEnter);
      this.$refs.popover.removeEventListener("mouseleave", this.hoverClose);
    }
  },
  computed: {
    openEvent() {
      if (this.trigger === 'click') {
        return 'click';
      }else {
        return 'mouseenter';
      }
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
      if (this.position === 'top') {
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      }else if(this.position === 'bottom') {
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + height + window.scrollY + 'px';
      }else if(this.position === 'left') {
        let {height: height2} = this.$refs.contentWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + (height - height2) / 2+ 'px';
      }else if(this.position === 'right') {
        let {height: height2} = this.$refs.contentWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left = left + window.scrollX + width + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + (height - height2) / 2+ 'px';
      }
    },
    listenToDocument() {
      let clickHandler = (e) => {
        if ((this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)) || (this.$refs.popover && this.$refs.popover.contains(e.target))) {
          return
        }
        this.visible = false;
        document.removeEventListener('click', clickHandler);
      }
      // 监听点击页面其他位置
      document.addEventListener('click', clickHandler);
    },
    onShow() {
      setTimeout(() => {
        // 放到页面所有标签下方，避免overflow:hidden时被遮盖
        // 并相对于button的定位
        this.positionContent();
        this.listenToDocument();
      }, 0)
    },
    hoverOpen() {
      setTimeout(() => {
        // 放到页面所有标签下方，避免overflow:hidden时被遮盖
        // 并相对于button的定位
        this.positionContent();
      }, 0)
    },
    hoverClose() {
      this.visible = false;
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        this.visible = !this.visible;
        if (this.visible) {
          this.onShow()
        }
      }
    },
    onEnter() {
      this.visible = !this.visible;
      if (this.visible) {
        this.hoverOpen();
      }
    }

  }
}
</script>


<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
$primary-05: #edebfa;
$font-size: 14px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  font-size: $font-size;
}

.content-wrapper {
  position: absolute;
  filter: drop-shadow(0 1px 1px $primary-05);
  background: white;
  border-radius: $border-radius;
  box-shadow: 0 0 20px 4px #9aa1b126, 0 4px 80px -8px #24282f40, 0 4px 4px -2px #5b5e6926;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  z-index: 1;
  color: #26323d;
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      left: 10px;
      width: 0;
      height: 0;
      position: absolute;
    }
    &::before {
      border-bottom: none;
      top: 100%;
      border-top-color: white;
    }
    &::after {
      border-bottom: none;
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      left: 10px;
      width: 0;
      height: 0;
      position: absolute;
    }
    &::before {
      border-top: none;
      bottom: 100%;
      border-bottom-color: white;
    }
    &::after {
      border-top: none;
      bottom: calc(100% - 1px);
      border-bottom-color: white;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: white;
      left: 100%;
      border-right: none;
    }
    &::after {
      border-right: none;
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left: none;
      border-right-color: white;
      right: 100%;
    }
    &::after {
      border-left: none;
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }

}
</style>