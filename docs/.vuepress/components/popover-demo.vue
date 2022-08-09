<template>
  <div>
    <div class="box">
      <h3>点击触发</h3>
      <m-popover>
        <template v-slot:content>
          <div>有蒸羊羔</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>
      <m-popover position="bottom">
        <template v-slot:content>
          <div>蒸熊掌</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>
      <m-popover position="left">
        <template v-slot:content>
          <div>蒸鹿尾儿</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>
      <m-popover position="right">
        <template v-slot:content>
          <div>烧花鸭</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>
      <pre><code class="html">{{block1}}</code></pre>
    </div>
    <div class="box">
      <h3>Hover触发</h3>
      <m-popover trigger="hover">
        <template v-slot:content>
          <div>有蒸羊羔</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>
      <m-popover position="bottom" trigger="hover">
        <template v-slot:content>
          <div>蒸熊掌</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>
      <m-popover position="left" trigger="hover">
        <template v-slot:content>
          <div>蒸鹿尾儿</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>
      <m-popover position="right" trigger="hover">
        <template v-slot:content>
          <div>烧花鸭</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>
      <pre><code class="html">{{block2}}</code></pre>
    </div>
    <h3>Props</h3>
  </div>
</template>

<script>
import Popover from "../../../src/popover"
import Button from "../../../src/button"

export default {
  components: {
    'm-popover': Popover,
    'm-button': Button
  },
  data() {
    return {
      block1: `
      <m-popover>
        <template v-slot:content>
          <div>有蒸羊羔</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>

      <m-popover position="bottom">
        <template v-slot:content>
          <div>蒸熊掌</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>

      <m-popover position="left">
        <template v-slot:content>
          <div>蒸鹿尾儿</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>

      <m-popover position="right">
        <template v-slot:content>
          <div>烧花鸭</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>
      `.replace(/^\s*/gm, '').trim(),
      block2: `
      <m-popover trigger="hover">
        <template v-slot:content>
          <div>有蒸羊羔</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>

      <m-popover position="bottom" trigger="hover">
        <template v-slot:content>
          <div>蒸熊掌</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>

      <m-popover position="left" trigger="hover">
        <template v-slot:content>
          <div>蒸鹿尾儿</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>

      <m-popover position="right" trigger="hover">
        <template v-slot:content>
          <div>烧花鸭</div>
        </template>
        <m-button>今天吃啥</m-button>
      </m-popover>
      `.replace(/^\s*/gm, '').trim()
    }
  },
  created() {
    //主题css，可自选
    import("highlight.js/styles/base16/zenburn.css");
    import("highlight.js/lib/index.js").then(hljs => {
      hljs.initHighlightingOnLoad();
    });
  }
}
</script>


<style>
.box:not(:last-child) {
  margin-bottom: 50px;
}
</style>