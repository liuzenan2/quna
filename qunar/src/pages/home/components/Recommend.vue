<template>
  <div class="recommend"> 
      <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) in list" :key="index">
                    <img :src="item.imgUrl" alt="" class="item-img">
                <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>  
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
        name:'HomeRecommend',
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
      margin-top: .2rem
    .item
      display: flex
      height: 1.9rem
      overflow: hidden
      .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
      .item-info
        flex: 1
        padding: .1rem
        .item-title
          line-height: .54rem
          font-size: .32rem
          
        .item-desc
          line-height: .4rem
          color: #ccc
          
        .item-button
          background-color: #ff9300
          border-radius: .06rem
          padding:0 .2rem
          margin-top: .16rem
          line-height: .44rem
          color: #ffffff   
</style>