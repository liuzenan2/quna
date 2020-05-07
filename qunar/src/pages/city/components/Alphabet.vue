<template>
  <div class="list">
      <li class="item" v-for="(item,index) in letters" :ref="item" :key="index" @click="hand" @touchstart='handleTouchStart' @touchmove='handleTouchMove' @touchend='handleTouchEnd'>{{item}}</li>
  </div>
</template>

<script>
export default {
  name:'CityCityAlphabet',
  data() {
      return {
          touchStatus: true,
          startY: 0, //提高性能
          timer: null
      }
  },
  props: {
      cities:Object
  },
  computed: {
      letters (){
          const letters = []
          for (let i in this.cities){
              letters.push(i)
          }
          return letters
      }
  },
  updated() {
      this.startY = this.$refs['A'][0].offsetTop //提高性能
  },
  methods: {
      hand(e){
          this.$emit('change',e.target.innerText)
      },
      handleTouchStart(){
          this.touchStatus = true
      },
      handleTouchMove(e){
          if(this.timer) {
              clearTimeout(this.timer)
          }
          this.timer = setTimeout(()=>{
             const touchY =e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) /20)
            this.$emit('change',this.letters[index])
          
          },16)
           this.touchStatus = false
      },
      handleTouchEnd(){

      }
  },
}
</script>

<style lang='stylus' scoped>
   @import '~styles/varibles.styl'
  .list
    position: absolute
    top: 1.58rem
    bottom: 0
    width: .4rem
    right: 0
    display: flex
    flex-direction: column
    justify-content: center  
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor  
      list-style: none      
</style>