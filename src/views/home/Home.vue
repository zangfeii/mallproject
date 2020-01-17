<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  //导出加default 导入不用{}
  import {getHomeMulidata} from '../../network/home'
  export default {
    name:'Home',
    components:{
      NavBar
    },
    data() {
      return {
        banners: []
      }
    },
    created() {
      getHomeMulidata().then(res =>{
        //函数结束,res会被回收,需要保存到 banners
        this.banners = res.data.banner.list

      })
    },
}
</script>

<style>
  .home-nav{
    background-color: pink;
    color: aliceblue
  }
</style>