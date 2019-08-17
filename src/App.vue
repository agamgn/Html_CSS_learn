<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
// 导入的时候如果在子组件中写了name的话这里导入的就是什么
import MHeader from '@/components/m-header/m-header'
import Tab from '@/components/tab/tab'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped lang='stylus'>
@import "./common/stylus/variable.styl"
#app
  background: #222
</style>
