<template>
  <div class="detail">
      <banner></banner>
      <DetailHeader></DetailHeader>
      <div class="container">
          123
      </div>
  </div>
</template>

<script>
import banner from './components/banner'
import DetailHeader from './components/header'
export default {
  name: 'detail',
  components:{banner,DetailHeader}
}
</script>

<style lang='stylus' scoped>
    .container
      height: 100rem 
</style>