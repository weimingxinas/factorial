<template>
  <div id="app">
    <h2>关于10000的阶乘（js阶乘实现和精度探究）</h2>
    <el-tabs v-model="activeName">
    <el-tab-pane label="JS精度" name="about">
      <about />
    </el-tab-pane>
    <el-tab-pane label="递推" name="second">
      <second />
    </el-tab-pane>
    <el-tab-pane label="递归" name="third">
      <third />
    </el-tab-pane>
    <el-tab-pane label="使用数组" name="fourth">
      <fourth />
    </el-tab-pane>
    <el-tab-pane label="总结" name="summary">
      <Summary />
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import About from './components/about.vue'
import Second from './components/second.vue'
import Third from './components/third.vue'
import Fourth from './components/fourth.vue'
import Summary from './components/summary.vue'

export default {
  name: 'app',
  components: {
    About,
    Second,
    Third,
    Fourth,
    Summary
  },
  data() {
    return {
      activeName: 'about'
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 60px;
}
.el-tabs__content {
  padding-left: 20px;
}
blockquote{
  background-color: #eeeeee;
  padding:10px;
  border-left: 4px  solid #409EFF;
}
.run {
  .el-button{
    margin: 0 10px;
  }
  .el-textarea {
    margin-top: 10px;
  }
}
</style>
