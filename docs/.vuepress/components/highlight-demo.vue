<template>
  <div>
    <h3>高亮词句</h3>
    <p>我希望我的"自我"永远"滋滋"地响，翻腾不休，就像火炭上的<m-highlight type="unique">一滴糖</m-highlight>。</p>
    <p>生活本身就是无边无际的大海，既充满众多混杂的漂流物，<m-highlight type="warning">反复多变</m-highlight>，暴怒无常；又总是充满着一派澄明<m-highlight type="success">和蔚蓝</m-highlight>。</p>
    <pre><code class="html">{{block1}}</code></pre>
    <h3>Props</h3>
  </div>
</template>

<script>
import Highlight from '../../../src/highlight'

export default {
  components: {
    'm-highlight': Highlight
  },
  data() {
    return {
      block1: `<p>我希望我的"自我"永远"滋滋"地响，翻腾不休，就像火炭上的
        <m-highlight type="unique">一滴糖</m-highlight>。
        </p>
    <p>生活本身就是无边无际的大海，既充满众多混杂的漂流物，
    <m-highlight type="warning">反复多变</m-highlight>，暴怒无常；
    又总是充满着一派澄明<m-highlight type="success">和蔚蓝</m-highlight>。
    </p>`.replace(/^\s*/gm, '').trim(),
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

</style>