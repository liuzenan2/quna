<template>
  <div class="header">
      城市选择
       <div class="iconfont header-back"  @click="back">&#xe623;</div>
  </div>
</template>

<script>
export default {
    name:'CityHerder',
    methods: {
        back(){
            this.$router.push('/')
        }
    },
}
</script>

<style lang='stylus' scoped>
 @import '~styles/varibles.styl';
  .header
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #ffffff
    background: $bgColor 
    font-size: .32rem
    position: relative 
    .header-back
      top: 0px
      leftL 0 
      width: .64rem
      text-align: center
      font-size: .4rem
      position: absolute
      color: #ffffff     
</style>