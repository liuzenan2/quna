<template>
  <div class="list" ref="wrapper">
      <div>
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                  <div class="button">
                       北京
                  </div>
                 
              </div>
          </div>
      </div>
      <div class="ares">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
              <div class="button-wrapper" v-for="(item,index) in hot" :key="index">
                  <div class="button">
                       {{item.name}}
                  </div>
              </div>
          </div>
      </div>
      <div class="area" v-for="(item,key,index) in cities" :key="index" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
              <div class="item border-bottom" v-for="(inner,index) in item" :key="index">
                  {{inner.name}}
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default { 
  name:'CityList',
  mounted() {
      this.scroll= new Bscroll(this.$refs.wrapper)
  },
  props: {
      hot: Array,
      cities: Object,
      letter: String
  },
  watch: {
      letter () {
          if (this.letter) {
              const element = this.$refs[this.letter][0]
             
              this.scroll.scrollToElement(element)
          }
      }
  },
}
</script>

<style lang='stylus' scoped>
   @import '~styles/varibles.styl';
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc 
  .border-bottom
    &:before
      border-color: red
    &:after
      border-color: red    
  .list
    position: absolute
    top: 1.58rem
    left: 0
    bottom: 0
    right: 0
    overflow: hidden    
    .title
      line-height: .54rem
      background-color: #eeeeee
      color: #666666
      font-size: .26rem 
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
          text-align: center
          margin: .1rem
          border: .02rem solid #cccccc  
          padding: .1rem 0
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem 
</style>