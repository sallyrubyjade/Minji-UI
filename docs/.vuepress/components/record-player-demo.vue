<template>
  <div class="player-page">
    <div class="player-group">
      <div class="player-wrapper">
        <m-player></m-player>
        <div class="gap"></div>
        <m-player color="purple"></m-player>
      </div>
      <div class="player-wrapper">
        <m-player color="blue"></m-player>
        <div class="gap"></div>
        <m-player color="green"></m-player>
      </div>
    </div>
    <div class="code-block">
      <pre><code class="html">{{block}}</code></pre>
    </div>
  </div>
</template>

<script>
import RecordPlayer from '../../../src/record-player'

export default {
  components: {
    'm-player': RecordPlayer
  },
  data() {
    return {
      block: `
      <m-player></m-player>
      <m-player color="purple"></m-player>
      <m-player color="blue"></m-player>
      <m-player color="green"></m-player>
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
.player-group {
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  top: 30px;
}

.player-wrapper{
  //background-color: grey;
  margin-right: 60px;
  > .gap {
    margin-bottom: 40px;
  }
}

.code-block {
  position: absolute;
  top: 600px;
  width: 730px;
}
</style>