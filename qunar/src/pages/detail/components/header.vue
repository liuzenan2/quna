<template>
  <div >
      
      <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
          <div class="iconfont header-abs-back">&#xe623;</div>
      </router-link >
      <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
          景点详情
           <div class="iconfont header-back">&#xe623;</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
      return {
          showAbs:true,
          opacityStyle:{
              opacity: 0
          }
      }
  },
  methods: {
      hand(){
          const top=document.documentElement.scrollTop
          console.log(top)
          if(top>60 ){
              let opacity = top /140
              opacity=opacity>1? 1:opacity
              this.opacityStyle={
                  opacity
              }
              this.showAbs = false
          }else{
              this.showAbs=true

          }
      }
  },
  activated() {
      window.addEventListener('scroll',this.hand)
  },
  deactivated() {  //页面让隐藏的生命周期函数
      window.removeEventListener('scroll',this.hand)
  },
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  .header-abs
    position: absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    text-align center
    background rgba(0,0,0,.6)
    .header-abs-back
      color #ffffff
      line-height .8rem
      font-size .6rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #ffffff
    background: $bgColor 
    font-size: .32rem
    .header-back
      top: 0px
      leftL 0 
      width: .64rem
      text-align: center
      font-size: .4rem
      position: absolute
      color: #ffffff     
</style>