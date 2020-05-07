<template>
  <div class="recommend"> 
      <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) in list" :key="index">
                <div class="item-img-wrapper">
                <img :src="item.imgUrl" alt="" class="item-img">
                </div>    
                <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
        name:'HomeWeekend',
        data() {
            return {
               
            }
        },
        props:{
            list:Array
        }
}
</script>

<style lang='stylus' scoped>
 @import '~styles/mixin.styl';
  .recommend
    .recommend-title
      line-height: .4rem
      background: #eeeeee
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.1%
    .item-img
        width: 100%
      .item-info
        flex: 1
        padding: .1rem
        .item-title
          line-height: .54rem
          font-size: .32rem
        .item-desc
          line-height: .4rem
          color: #ccc
</style>