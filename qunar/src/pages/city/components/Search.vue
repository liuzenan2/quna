<template>
    <div>
  <div class="search">
      <input type="text" placeholder="输入城市名称或者拼音" name="" class="search-input" v-model="keyword">
     
  </div>
   <div class="search-content" ref="seach" v-show="keyword">
       <ul>
           <li v-for="(item,index) in list" :key="index" class="search-item border-bottom" @click="handleCityClick(item.name)">
               {{item.name}}
           </li>
           <li class="search-item border-bottom" v-if="!list.length" >
               没有匹配数据
           </li>
       </ul>
      </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapActions} from 'vuex'
export default {
  name: 'CitySearch',
  data() {
      return {
          keyword:'',
          list: [],
          timer: null
      }
  },
  props:{
      cities:Object
  },
   methods: {
    ...mapActions(['changeCity']),
    handleCityClick(city){
    this.changeCity(city)
    this.$router.push('/')
    }
   },
  watch: {
    keyword(){
        if(this.timer){
            clearTimeout(this.timer)
        }
        if(!this.keyword) {
            this.list= []
            return
        }
        this.timer = setTimeout(()=>{
            const result=[]
            for (let i in this.cities){
                this.cities[i].forEach((value)=>{
                    if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
                        result.push(value)
                    }
                })
            }
            this.list=result
        },100)
    }
  },
 mounted() {
    this.scroll = new Bscroll(this.$refs.seach)  
 },
}
</script>

<style lang='stylus' scoped>
   @import '~styles/varibles.styl';
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    .search-input
      box-sizing: border-box
      padding: 0 .1rem
      height: .62rem
      line-height: .62rem
      width: 100%
      text-align: center
      border-radius: .06rem    
      color: #666666 
  .search-content
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0 
    right: 0
    bottom: 0 
    z-index: 1
    background-color: #eeeeee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666666  
</style>