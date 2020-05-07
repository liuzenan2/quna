<template>
  <div class="home">
      <home-header :city='city'></home-header>
      <home-swiper :list='swiperLIst'></home-swiper>
      <home-icons :list='iconList'></home-icons>
      <home-recommend :list='recommendList'></home-recommend>
      <home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      city:'',
      swiperLIst:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted() {
    this.getHomeInfo()
    this.getHomeInfoImg()
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/city.json').then((res)=>{
           res=res.data
           if(res.ret){
             this.city=res.data.hotCities
           }
      })
    },
    getHomeInfoImg(){
      axios.get('/api/index.json').then((res)=>{
      res = res.data
        if(res.ret){
          this.swiperLIst=res.data.swiperList 
          this.iconList=res.data.iconList
          this.recommendList=res.data.recommendList
          this.weekendList=res.data.weekendList
        }
      })
    }
  },
}
</script>

<style>

</style>
