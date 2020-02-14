<template>
  <div id="button-bar">
    <div class="bt1">客服</div>
    <div class="bt2">店铺</div>
    <div class="bt3">收藏</div>
    <div class="bt4" @click="addCar">添加购物车</div>
    <div class="bt5">购买</div>
  </div>
</template>

<script>
export default {
  name: 'detailBottonBar',
  methods: {
    addCar() {
      this.$emit('addGoodsCar')
    }
  }
}
</script>

<style>
  #button-bar{
    display: flex;
    /* background: red; */
    height: 50px;
    text-align: center;
  }

  .bt1,.bt2,.bt3,.bt4,.bt5 {
    width: 25%;
    height: 50px;
    line-height: 50px;
  }

   .bt1,.bt2,.bt3 {
     background: white;
   }

   .bt4 {
     background:#F8D80E;
   }

   .bt5 {
     background: #FF779B;
   }
</style>