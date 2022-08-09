<template>
<div>
  <div class="box">
    <h3>基础弹窗</h3>
    <m-button type="primary" @click="method1">确定</m-button>
    <span class="button-gap"></span>
    <m-button type="danger" @click="method2">查看</m-button>
    <pre><code class="javascript">{{block1}}</code></pre>
  </div>
  <div class="box">
    <h3>点击后弹窗关闭</h3>
    <m-button type="secondary" @click="useToastSetting">想吃</m-button>
    <pre><code class="javascript">{{block2}}</code></pre>
  </div>
  <h3>Props</h3>
</div>
</template>


<script>
import Toast from "../../../src/toast"
import Button from "../../../src/button"
import Vue from 'vue';
import plugin from '../../../src/plugin';
Vue.use(plugin);

export default {
  components: {
    'm-toast': Toast,
    'm-button': Button
  },
  data() {
    return {
      block1: `
      <m-button type="primary" @click="method1">确定</m-button>
      <m-button type="danger" @click="method2">查看</m-button>
      import Vue from 'vue';
      import plugin from '../../../src/plugin';
      Vue.use(plugin);
      export default {
        methods: {
            method1(){ this.$toast("已加入购物车！"); },
            method2() {this.$toast(\`血量过低，危险危险危险！\`, {position: 'middle', type: 'danger'});},
            }
      }
      `.replace(/^\s*/gm, '').trim(),
      block2: `
      <m-button type="secondary" @click="useToastSetting">想吃</m-button>
      import Vue from 'vue';
      import plugin from '../../../src/plugin';
      Vue.use(plugin);
      export default {
        methods: {
            useToastSetting() {
                this.$toast(\`小心长胖\`, {
                    position: 'bottom',
                    type: 'warning',
                    autoClose: false,
                    closeBtn: { text: '知道了',callback(toast) {console.log('用户说知道了'); }});
            },
        }
      }
      `.replace(/^\s*/gm, '').trim(),
    }
  },
  methods: {
    method1(){
      this.$toast("已加入购物车！");
    },
    method2() {
      this.$toast(`血量过低，危险危险危险！`, {position: 'middle', type: 'danger'});
    },
    useToastSetting() {
      this.$toast(`小心长胖`, {
        position: 'bottom',
        type: 'warning',
        autoClose: false,
        closeBtn: {
          text: '知道了',
          callback(toast) {
            console.log('用户说知道了');
          }
        }
      });
    },
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
  > .button-gap {
    margin-right: 8px;
  }
}
</style>