<template>
<div>
  <div class="banner" @click="handBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="" class="banner-img">
      <div class="banner-info">
          <div class="banner-title">大连海洋景区（AAA）</div>
          <div class="banner-number">39</div>
      </div>
  </div>
  <CommonGallary :imgs='imgs' v-show="showGallary" @close='hand'></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'banner',
  data() {
    return {
      imgs: [],
      showGallary:false
    }
  },
  components:{CommonGallary},
  methods: {
    handBannerClick(){
      this.showGallary=true
    },
    hand(){
       this.showGallary=false
    }
  },
}
</script>

<style lang='stylus' scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55% 
    .banner-img
      width: 100% 
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #ffffff 
      display: flex
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8) )  
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem  
      .banner-number
        margin-top: .14rem 
        padding: 0 .4rem
        line-height: .4rem
        height: .4rem 
        line-height: .32rem
        font-size: .24rem  
        border-radius: .2rem
        background: rgba(0,0,0,.8) 
</style>