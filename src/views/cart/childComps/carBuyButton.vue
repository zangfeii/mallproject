<template>
  <div id="buyButton">
    <!-- 全选 -->
    <div class="allCheck">
     <check-button :ischek='isAllCheck'></check-button>
     <span>全选</span>
    </div>
    <!-- 合计   -->
    <div class="allPrice">合计:{{}}</div>
    <!-- 购买 -->
    <div class="buy">购买({{$store.state.carList.length}})</div>
  </div>  
</template>

<script>
import checkButton from './checkButton'
export default {
  name: 'carBuyButton',
  components: {checkButton},
  props: {
    isAllCheck:{
      type: Boolean,
      default: true
    }
  }

}
</script>

<style>
  #buyButton {
    display: flex;
    height: 44px;
    text-align: center;
    /* line-height: 44px; */
    align-items: center;
  }
  
  .allCheck {
    display: flex;
    justify-content: center;
    padding: 1px;
    width: 50px;
  }

  .allPrice {
    flex: 1;
  }

  .buy {
    width: 100px;
    height: 44px;
    background: #FF5200;
    line-height: 44px;
  }
</style>