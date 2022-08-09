<template>
  <div>
    <div class="box">
      <h3>基础输入框</h3>
      <div class="input-wrapper">
        <m-input value="你好我是正常"></m-input>
      </div>
      <div class="input-wrapper">
        <m-input value="你好我是只读" readonly></m-input>
      </div>
      <div class="input-wrapper">
        <m-input value="你好我是禁用" disabled></m-input>
      </div>
      <pre><code class="html">{{ block1 }}</code></pre>
    </div>
    <div class="box">
      <h3>支持双向绑定</h3>
      <div class="info-class">
        <m-input v-model="inputVal" @input="listenInput"></m-input>
        <p class="input-display">{{ inputVal }}</p>
      </div>
      <pre><code class="html">{{ block2 }}</code></pre>
    </div>
    <div class="box">
      <h3>错误提醒</h3>
      <m-input value="唐僧爱飘柔" error="用户名不能少于6个字"></m-input>
      <pre><code class="html">{{ block3 }}</code></pre>
    </div>
    <h3>Props</h3>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  components: {
    'm-input': Input
  },
  data() {
    return {
      block1: `
    <m-input value="你好我是正常"></m-input>
    <m-input value="你好我是只读" readonly></m-input>
    <m-input value="你好我是禁用" disabled></m-input>
    `.replace(/^\s*/gm, '').trim(),
      block2: `<m-input v-model="inputVal" @input="listenInput"></m-input>
        <p class="input-display">{{ inputVal }}</p>`.replace(/^\s*/gm, '').trim(),
      block3: ` <m-input value="唐僧爱飘柔" error="用户名不能少于6个字"></m-input>`.replace(/^\s*/gm, '').trim(),
      inputVal: '试试'
    }
  },
  methods: {
    listenInput(e) {
      this.inputVal = e;
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
.input-wrapper {
  margin-bottom: 10px;
}

.info-class {
  display: flex;
  flex-direction: column;
  > .input-display {
    font-size: 14px;
    color: #6d5dd3;
    margin-left: 8px;
  }
}
</style>