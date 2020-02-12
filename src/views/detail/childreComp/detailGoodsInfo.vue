<template>
  <div id = 'detainfo'>
    <div class="pdect"></div>
      <p class="p1">{{goodsInfo.desc}}</p>
    <div class="pdecb"></div>
    <p class="p2">{{goodsInfo.detailImage[0].key}}:</p>
    <!-- 图片 -->
    <div v-for="(item, index) in goodsInfo.detailImage[0].list" :key="index">
      <img :src="item" alt="" @load="imgload">
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailGoodsInfo',
  props:{
    goodsInfo: {
      type: Object
    }
  },
  data () {
    return {
      imglength:0,
      counter:0
    }
  },
  methods: {
    imgload(){
      if( ++this.counter === this.imglength){
        this.$emit('imageload')
      }
      // console.log(this.goodsInfo.detailImage[0].list.length);
    }
  },
  watch:{
    goodsInfo(){
      this.imglength = this.goodsInfo.detailImage[0].list.length
    }
  },
}
</script>

<style>
  .detainfo {
    position: relative;
  }
  
  .pdect {
    margin-top: 30px;
    width: 150px;
    height: 1px;
    background: #000;
  }

  .pdecb {
    /* margin-top: 30px; */
    width: 150px;
    height: 1px;
    /* border-top: 1px solid black; */
    background: #000;
    margin-bottom: 30sspx;
    position: absolute;
    right: 0;
    /* top: 0; */
  }

  .pdect::before{
    content: "|";
    /* width: 5px; */
    /* height: 1px; */
    /* background: #000; */
  }

  .p1 {
    padding: 10px;
    margin-top: 2px;
    text-align: center;
    /* border-left: 10xp solid black; */
  }

  .p2 {
    margin-top: 40px;
  }

  img {
    width: 100%;
  }
</style>