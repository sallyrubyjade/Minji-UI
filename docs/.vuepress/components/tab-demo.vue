<template>
  <div>
    <div class="box">
      <h3>基础用法</h3>
      <m-tab :selected="selectedTab" v-on:update:selected="selectedTab = $event">
        <m-tab-head>
          <m-tab-label name="rainbow">彩虹的微笑</m-tab-label>
          <m-tab-label name="love">爱的天灵灵</m-tab-label>
          <m-tab-label name="bigsleep">大眠</m-tab-label>
        </m-tab-head>
        <m-tab-body>
          <m-tab-pane name="rainbow">发行时间：2006年7月14日</m-tab-pane>
          <m-tab-pane name="love">专辑名称：《Magic Cyndi》，发行时间：2007年4月30日</m-tab-pane>
          <m-tab-pane name="bigsleep">发行时间：2018年12月7日</m-tab-pane>
        </m-tab-body>
      </m-tab>
      <pre><code class="html">{{ block1 }}</code></pre>
    </div>
    <div class="box">
      <h3>带有Icon的标签栏</h3>
      <m-tab :selected="selectedTab2" v-on:update:selected="selectedTab2 = $event">
        <m-tab-head>
          <m-tab-label name="home">
            <m-icon icon-name="home"></m-icon>
            主页
          </m-tab-label>
          <m-tab-label name="music">
            <m-icon icon-name="music"></m-icon>
            音乐
          </m-tab-label>
          <m-tab-label name="collection">
            <m-icon icon-name="star"></m-icon>
            收藏
          </m-tab-label>
          <m-tab-label name="setting">
            <m-icon icon-name="settings"></m-icon>
            设置
          </m-tab-label>
        </m-tab-head>
        <m-tab-body>
          <m-tab-pane name="home">这里是主页</m-tab-pane>
          <m-tab-pane name="music">这里是音乐</m-tab-pane>
          <m-tab-pane name="collection">这里是收藏</m-tab-pane>
          <m-tab-pane name="setting">这里是设置</m-tab-pane>
        </m-tab-body>
      </m-tab>
      <pre><code class="html">{{ block2 }}</code></pre>
    </div>
    <h3>Props</h3>
  </div>
</template>

<script>
import Tab from "../../../src/tab"
import TabHead from "../../../src/tab-head"
import TabBody from "../../../src/tab-body"
import TabLabel from "../../../src/tab-label"
import TabPane from "../../../src/tab-pane"
import Icon from "../../../src/icon"

export default {
  components: {
    'm-tab': Tab,
    'm-tab-head': TabHead,
    'm-tab-body': TabBody,
    'm-tab-label': TabLabel,
    'm-tab-pane': TabPane,
    "m-icon": Icon
  },
  data() {
    return {
      block1: `<m-tab :selected="selectedTab" v-on:update:selected="selectedTab = $event">
        <m-tab-head>
          <m-tab-label name="rainbow">彩虹的微笑</m-tab-label>
          <m-tab-label name="love">爱的天灵灵</m-tab-label>
          <m-tab-label name="bigsleep">大眠</m-tab-label>
        </m-tab-head>
        <m-tab-body>
          <m-tab-pane name="rainbow">发行时间：2006年7月14日</m-tab-pane>
          <m-tab-pane name="love">专辑名称：《Magic Cyndi》，发行时间：2007年4月30日</m-tab-pane>
          <m-tab-pane name="bigsleep">发行时间：2018年12月7日</m-tab-pane>
        </m-tab-body>
      </m-tab>`.replace(/^\s*/gm, '').trim(),
      block2: `<m-tab :selected="selectedTab2" v-on:update:selected="selectedTab2 = $event">
        <m-tab-head>
          <m-tab-label name="home">
            <m-icon icon-name="home"></m-icon>
            主页
          </m-tab-label>
          <m-tab-label name="music">
            <m-icon icon-name="music"></m-icon>
            音乐
          </m-tab-label>
          <m-tab-label name="collection">
            <m-icon icon-name="star"></m-icon>
            收藏
          </m-tab-label>
          <m-tab-label name="setting">
            <m-icon icon-name="settings"></m-icon>
            设置
          </m-tab-label>
        </m-tab-head>
        <m-tab-body>
          <m-tab-pane name="home">这里是主页</m-tab-pane>
          <m-tab-pane name="music">这里是音乐</m-tab-pane>
          <m-tab-pane name="collection">这里是收藏</m-tab-pane>
          <m-tab-pane name="setting">这里是设置</m-tab-pane>
        </m-tab-body>
      </m-tab>`.replace(/^\s*/gm, '').trim(),
      selectedTab: 'rainbow',
      selectedTab2: 'music'
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