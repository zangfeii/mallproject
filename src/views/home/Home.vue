<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>

  <tab-control :titles ="['流行','新款','精选']"  @tabclick = 'tabclick' 
  ref='tabcontrol1' class="relfied" v-show="isfied"/>

  <scroll class="connent" 
    ref="scroll" 
    :probe-type ='3'
    @scroll ='contentScroll'
    :pull-up-load ='true'
    @pullingUp = 'loadMore'>
    <!-- 轮播图 -->
    <el-carousel trigger="click" height="200px" ref='swiperimg'>
      <el-carousel-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="" width ='100%' @load="swiperimageload">
        </a>
      </el-carousel-item>
    </el-carousel>
    <home-recommed-view :recommends ='recommends'/>
    <feature-vive/>
    <tab-control :titles ="['流行','新款','精选']"  @tabclick = 'tabclick' 
                 ref='tabcontrol2' />
  <!-- <home-good-list :goods = "goods[currentType].list" /> -->
    <home-good-list :goods = "showCurrentType" />
  </scroll>
  
  <back-top @click.native="backClick" v-show="showBackTop"/>
</div>
</template>

<script>
  import homeRecommedView from '../home/childComps/homeRecommedView'
  import featureVive from './childComps/featureVive'

  import NavBar from '../../components/common/navbar/NavBar'
  import tabControl from '../../components/content/tabControl/tabControl'
  import homeGoodList from '../../components/content/goods/homeGoodList'
  import  backTop from '../../components/content/backtop/backTop'
  import scroll from '../../components/common/scroll/srcoll'

  //导出加default 导入不用{}
  import { getHomeMulidata,getHomegGoods } from '../../network/home'
  import {debounce} from '../../common/tool'

  export default {
    name: 'Home',
    components: {
      NavBar,
      homeRecommedView,
      featureVive,
      tabControl,
      homeGoodList,
      backTop,
      scroll 
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0 ,list: []},
          'new': {page: 0 ,list: []},
          'sell': {page: 0 ,list: []}
        },
        currentType: 'pop',
        showBackTop: false,
        tabcontrolheight:0,
        isfied:false,
        leveSaveY:0
      }
    },
    computed: {
      showCurrentType(){
        return this.goods[this.currentType].list
      },
      
      
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
    mounted() {
      const refres = debounce(this.$refs.scroll.scroll.refresh,100)
      this.$bus.$on('loadimg', () =>{
        refres()  
      })
    },
    activated() {
      this.$refs.scroll.scroll.scrollTo(0, this.leveSaveY,0)
      this.$refs.scroll.scroll.refresh()
    },
    deactivated() {
      this.leveSaveY = this.$refs.scroll.scroll.y
      console.log(this.leveSaveY);
      // console.log(this.$refs.scroll.scroll.refresh);
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
        //滚动多次加载
        this.$refs.scroll.scroll.finishPullUp()
        //刷新 解决滑动卡住
        // this.$refs.scroll.scroll.refresh()

      })
      },
      tabclick(index){
        // console.log(index);
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabcontrol1.currentIndex = index
        this.$refs.tabcontrol2.currentIndex = index
      },
      backClick(){
        console.log('点击');
        // this.$refs.scroll.scroll.scrollTo(0, 0,800)
        this.$refs.scroll.scrollTo(0,0)
        // console.log(this.$refs.scroll.scroll.scrollTo);
      },
      //获取tabcontro到顶部的距离
      swiperimageload(){
        this.tabcontrolheight = this.$refs.tabcontrol2.$el.offsetTop
      },
      contentScroll(position){
        // console.log(position);
        // console.log(this.showBackTop);
        this.showBackTop = (-position.y) >500
        this.isfied = (-position.y)>this.tabcontrolheight
        // console.log((-position.y) >1000);
      },
      loadMore(){
        this.getHomegGoods(this.currentType)
      },
      
     
    },
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    position: relative;
    z-index: 9;
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

  /* .tabControl {
    position: sticky;
    top: 44px;
  } */

  .connent{ 
    /* overflow: hidden; */
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }

  .relfied{
    position: relative;;
    z-index: 9;
  }
</style>