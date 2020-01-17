<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <!-- 轮播图 -->
  <el-carousel trigger="click" height="200px">
    <el-carousel-item v-for="item in banners">
      <a :href="item.link">
          <img :src="item.image" alt="" width ='100%' >
        </a>
    </el-carousel-item>
  </el-carousel>

  <home-recommed-view :recommends ='recommends'/>
  <feature-vive/>
  <tab-control :titles ="['流行','新款','精选']" class="tabControl"/>
  <home-good-list :goods = "goods['pop'].list" />
</div>
</template>

<script>
  import homeRecommedView from '../home/childComps/homeRecommedView'
  import featureVive from './childComps/featureVive'

  import NavBar from '../../components/common/navbar/NavBar'
  import tabControl from '../../components/content/tabControl/tabControl'
  import homeGoodList from '../../components/content/goods/homeGoodList'

  //导出加default 导入不用{}
  import { getHomeMulidata,getHomegGoods } from '../../network/home'

  export default {
    name: 'Home',
    components: {
      NavBar,
      homeRecommedView,
      featureVive,
      tabControl,
      homeGoodList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0 ,list: []},
          'new': {page: 0 ,list: []},
          'sell': {page: 0 ,list: []}
        }
      }
    },
    created() {
      // getHomeMulidata().then(res => {
      //   //函数结束,res会被回收,需要保存到 banners
      //   // console.log(res);
      //   this.banners = res.data.banner.list
      //   this.recommends = res.data.recommend.list
      // })
      this.getHomeMulidata()
      //嵌函数????
      //请求商品数据
      // getHomegGoods('pop',1).then(res =>{
      //   console.log(res);
      // })
      this.getHomegGoods('pop')
      this.getHomegGoods('new')
      this.getHomegGoods('sell')
    },
    methods: {
      getHomeMulidata() {
        getHomeMulidata().then(res => {
        //函数结束,res会被回收,需要保存到 banners
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        }) 
      },
      getHomegGoods(type) {
        const page = this.goods[type].page + 1
        getHomegGoods(type,page).then(res =>{
        console.log(res.data.list);
        this.goods[type].list.push(...res.data.list) 
        this.goods[type].page += 1
      })
      }
    },
  }
</script>

<style>
  #home{
    padding-top: 44px;
  }

  .home-nav {
    background-color: pink;
    color: aliceblue;
    position: fixed;
    top: 0; 
    left: 0;
    right: 0;
    z-index: 9;
  /* width: 100%; */
  }

  .tabControl {
    position: sticky;
    top: 44px;
  }
</style>