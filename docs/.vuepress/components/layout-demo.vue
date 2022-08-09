<template>
  <div>
    <div class="box">
      <h3>样式一</h3>
      <m-layout height="400">
        <m-header height="100">header</m-header>
        <m-content>content</m-content>
        <m-footer height="50">footer</m-footer>
      </m-layout>
      <pre><code class="javascript">{{block1}}</code></pre>
    </div>
    <div class="box">
      <h3>样式二</h3>
      <m-layout height="400">
        <m-header height="100">header</m-header>
        <m-layout>
          <m-sider width="200">sidebar</m-sider>
          <m-content>content</m-content>
        </m-layout>
        <m-footer height="50">footer</m-footer>
      </m-layout>
      <pre><code class="javascript">{{block2}}</code></pre>
    </div>
    <div class="box">
      <h3>样式三</h3>
      <m-layout height="400">
        <m-sider width="300">sider</m-sider>
        <m-layout>
          <m-header height="100">header</m-header>
          <m-content>content</m-content>
          <m-footer height="50">footer</m-footer>
        </m-layout>
      </m-layout>
      <pre><code class="javascript">{{block3}}</code></pre>
    </div>
    <h3>Props</h3>
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Sider from '../../../src/sider'
import Header from '../../../src/header'
import Content from '../../../src/content'
import Footer from "../../../src/footer";

export default {
  components: {
    'm-layout': Layout,
    'm-sider': Sider,
    'm-header': Header,
    'm-content': Content,
    'm-footer': Footer
  },
  data() {
    return {
      block1: `<m-layout height="400">
        <m-header height="100">header</m-header>
        <m-content>content</m-content>
        <m-footer height="50">footer</m-footer>
      </m-layout>`.replace(/^\s*/gm, '').trim(),
      block2: `<m-layout height="400">
        <m-header height="100">header</m-header>
        <m-layout>
          <m-sider width="200">sidebar</m-sider>
          <m-content>content</m-content>
        </m-layout>
        <m-footer height="50">footer</m-footer>
      </m-layout>`.replace(/^\s*/gm, '').trim(),
      block3: `<m-layout height="400">
        <m-sider width="300">sider</m-sider>
        <m-layout>
          <m-header height="100">header</m-header>
          <m-content>content</m-content>
          <m-footer height="50">footer</m-footer>
        </m-layout>
      </m-layout>`.replace(/^\s*/gm, '').trim(),
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
.box {
  max-width: 660px;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
}

</style>