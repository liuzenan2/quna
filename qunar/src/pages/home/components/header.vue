<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe623;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe624;</span>
        输入城市/景点</div>
    <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe652;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display: flex
    background-color: $bgColor 
    line-height: .86rem
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
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: 0.24rem
        margin-left: -.04rem
</style>
