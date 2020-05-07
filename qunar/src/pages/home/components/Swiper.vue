<template>
    <div class="swiper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
      return {
        swiperOption:{
            pagination: '.swiper-pagination',
            loop: true
        },
      }
  },
  props:{
    list:Array
  },
  computed: {
    showSwiper(){
      return this.list.length
    }
  },
}
</script>

<style lang='stylus' scoped>
    .swiper >>> .swiper-pagination-bullet-active
        background-color: #ffffff
    .swiper
      width: 100%
      height: 0
      overflow: hidden
      padding-bottom: 30.4%;
    .swiper-img
      width: 100% 
</style>