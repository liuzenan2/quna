<template>
  <div class="home">
      <home-header></home-header>
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
import {mapState} from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      lastcity:'',
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
  computed: {
    ...mapState(['city'])
  },
  mounted() {
    this.getHomeInfoImg()
    this.lastcity=this.city
  },
  activated() {
    if(this.lastcity !== this.city){
      this.lastcity=this.city
      this.getHomeInfoImg()
    }
  },
  methods: {
    getHomeInfoImg(){
      axios.get('/api/index.json?city='+ this.city).then((res)=>{
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
