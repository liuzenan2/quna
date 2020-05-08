<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe623;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe624;</span>
        输入城市/景点</div>
        <router-link to="/city">
    <div class="header-right" >
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe652;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'header',
  computed: {
    ...mapState(['city'])
  },
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display: flex
    background-color: $bgColor 
    line-height: $headerHeight
    color: #ffffff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background-color: #ffffff
      border-radius: .1rem
      margin-top: .12rem
      height: .64rem
      line-height: .64rem
      margin-left: .2rem
      padding-left: .1rem
      color: #cccccc
    .header-right
      min-width: 1.04rem
      padding: .1rem
      float: right
      text-align: center
      color: #ffffff
      .arrow-icon
        font-size: 0.24rem
        margin-left: -.04rem
</style>
