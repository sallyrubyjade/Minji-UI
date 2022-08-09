<template>
  <div>
    <div class="box">
      <h3>普通按钮</h3>
      <m-button type="primary">primary</m-button>
      <m-button type="secondary">secondary</m-button>
      <m-button type="tertiary">tertiary</m-button>
      <m-button type="warning">warning</m-button>
      <m-button type="danger">danger</m-button>
      <pre><code class="html">{{block1}}</code></pre>
    </div>
    <div class="box">
      <h3>图标按钮</h3>
      <m-button type="tertiary" icon-name="fireworks">有点意思</m-button>
      <m-button type="secondary" icon-name="trophy">排行</m-button>
      <m-button type="primary" icon-name="add" icon-position="right">点我试试</m-button>
      <pre><code class="html">{{block2}}</code></pre>
    </div>
    <div class="box">
      <h3>加载按钮</h3>
      <m-button type="primary" loading>正在加载</m-button>
      <m-button type="danger" loading icon-position="right">加载迟缓</m-button>
      <pre><code class="html">{{block3}}</code></pre>
    </div>
    <div class="box">
      <h3>按钮组合</h3>
      <m-button-group>
        <m-button icon-name="left" icon-position="left">上一页</m-button>
        <m-button>中间</m-button>
        <m-button icon-name="right" icon-position="right">下一页</m-button>
      </m-button-group>
      <pre><code class="html">{{block4}}</code></pre>
    </div>
    <h3>Props</h3>
  </div>
</template>

<script>
import Button from '../../../src/button'
import ButtonGroup  from "../../../src/button-group";


export default {
  components: {
    'm-button': Button,
    'm-button-group': ButtonGroup
  },
  data() {
    return {
      block1: `
      <m-button type="primary">primary</m-button>
      <m-button type="secondary">secondary</m-button>
      <m-button type="tertiary">tertiary</m-button>
      <m-button type="warning">warning</m-button>
      <m-button type="danger">danger</m-button>`.replace(/^\s*/gm, '').trim(),
      block2: `
      <m-button type="tertiary" icon-name="fireworks">有点意思</m-button>
      <m-button type="secondary" icon-name="trophy">排行</m-button>
      <m-button type="primary" icon-name="add" icon-position="right">点我试试</m-button>
      `.replace(/^\s*/gm, '').trim(),
      block3: `
      <m-button type="primary" loading>正在加载</m-button>
      <m-button type="danger" loading icon-position="right">加载迟缓</m-button>`.replace(/^\s*/gm, '').trim(),
      block4: `
            <m-button-group>
        <m-button icon-name="left" icon-position="left">上一页</m-button>
        <m-button>中间</m-button>
        <m-button icon-name="right" icon-position="right">下一页</m-button>
      </m-button-group>
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

<style lang="scss" scoped>
.box:not(:last-child) {
  margin-bottom: 50px;
}
</style>