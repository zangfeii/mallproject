<template>
  <div id="detaill">
    <detail-nav-bar class="nav_bar" @titleClick='titleClick' ref='detalnavbarRef' ></detail-nav-bar>
    <detail-botton-bar class="botton-class"></detail-botton-bar>
    <scroll class="conent" ref="detailref"  @scroll ='detailScrollHeight'  :probe-type ='3'>
      <detaik-swipper :imgs='iiddatatopimg'></detaik-swipper>
      <good-status :msg='goods'></good-status>
      <detail-shoper :shopermsg='shoper'></detail-shoper>
      <detail-goods-info :goods-info ='detainfo' @imageload ='imgLoad'></detail-goods-info>
      <detail-goods-params :rule-data ='ruledata' ref="paramsRef"></detail-goods-params>
      <detail-comment-info :user-comment='userCommentInfo' ref="userCommnetRef" ></detail-comment-info>
      <home-good-list :goods ='recommend' ref="goodsListRef"></home-good-list>
    </scroll>
  </div>
</template>

<script>
import detailNavBar from '../detail/childreComp/detailNavBar'
import detaikSwipper from './childreComp/detaikSwipper'
import goodStatus from './childreComp/goodStatus'
import detailShoper from './childreComp/detailShoper'
import detailGoodsInfo from './childreComp/detailGoodsInfo'
import detailGoodsParams from './childreComp/detailGoodsParams'
import detailCommentInfo from './childreComp/detailCommentInfo'
import detailBottonBar from './childreComp/detailBottonBar'

import scroll from '../../components/common/scroll/srcoll'
import homeGoodList from '../../components/content/goods/homeGoodList'

import {getDetail,Goods,Shopper,GoodsParams,getRecommend} from '../../network/detail'
export default {
  name :'detail',
  components:{
    detailNavBar,
    detaikSwipper,
    goodStatus,
    detailShoper,
    detailGoodsInfo,
    detailGoodsParams,
    detailCommentInfo,
    homeGoodList,
    detailBottonBar,
    scroll
  },
  data() {
    return {
      // iid: null
      // getiid:''
      iiddatatopimg:[],
      goods:{},
      shoper:{},
      detainfo :{},
      ruledata :{},
      userCommentInfo :{},
      recommend:[],
      titleCheckHeight:[]
    }
  },
  created() {
    // console.log('创建');
    getDetail(this.iid).then(res =>{
      //获取物轮播图数据
      this.iiddatatopimg = res.result.itemInfo.topImages
      //获取物品销售状态
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
      //获取商家信息
      this.shoper = new Shopper(res.result.shopInfo)
      //保存商品的详细数据
      this.detainfo = res.result.detailInfo
      //获取商品尺寸数据
      this.ruledata = new GoodsParams(res.result.itemParams)
      //获取用户评价
      if(res.result.rate.cRate !=0){
        this.userCommentInfo = res.result.rate.list[0]
      }
      console.log(res);
      // console.log(res.result.shopInfo.score[1].name);
      
    }),
     //获取.推荐商品
    getRecommend().then(res =>{
      this.recommend = res.data.list
      // console.log('推荐商品'+ this.recommend);
      })

  },
  // destroyed() {
  //   console.log('销毁')
  // },
  computed: {
    iid(){
      this.isresh = this.$route.params.iid
      return this.$route.params.iid
    },
     
  },
  // updated() {
  //   this.titleCheckHeight = [],
  //   this.titleCheckHeight.push(0)
  //   this.titleCheckHeight.push(this.$refs.paramsRef.$el.offsetTop)
  //   this.titleCheckHeight.push(this.$refs.userCommnetRef.$el.offsetTop)
  //   this.titleCheckHeight.push(this.$refs.goodsListRef.$el.offsetTop)
  //   console.log(this.titleCheckHeight)
  // },
  
  methods: {
    imgLoad() {
      this.$refs.detailref.scroll.refresh()
      // console.log('dededd'+res);
      this.titleCheckHeight = [],
      this.titleCheckHeight.push(0)
      this.titleCheckHeight.push(this.$refs.paramsRef.$el.offsetTop)
      this.titleCheckHeight.push(this.$refs.userCommnetRef.$el.offsetTop)
      this.titleCheckHeight.push(this.$refs.goodsListRef.$el.offsetTop)
    },
    titleClick(index) {
      this.$refs.detailref.scrollTo(0,-this.titleCheckHeight[index])
    },
    detailScrollHeight(position){
      // console.log(-position.y);
      for (let index = 0; index < this.titleCheckHeight.length; index++) {
         if((index < this.titleCheckHeight.length-1 && -position.y > this.titleCheckHeight[index] && 
           -position.y < this.titleCheckHeight[index +1] ) || (index === this.titleCheckHeight.length -1 
           && -position.y > this.titleCheckHeight[index])){
          this.$refs.detalnavbarRef.titleClick = index
         }
      }
    }
  },
  
}
</script>

<style>
 .nav_bar {
   position: relative;
   z-index: 11;
   background-color: #fff;
 }
  
  #detaill {
    position: relative;
    z-index: 11;
    background-color: #fff;
  }

  .conent {
    /* z-index: 11; */
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
  }

  /* .botton-class{
    position: relative;
    top: 630px;
    bottom: -300px;
    z-index: 99;
  } */
</style>