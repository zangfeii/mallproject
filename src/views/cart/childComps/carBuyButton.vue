<template>
  <div id="buyButton">
    <!-- 全选 -->
    <div class="allCheck">
     <check-button :ischek='isAllCheckCom' @click.native="allcheckbtn"></check-button>
     <span>全选</span>
    </div>
    <!-- 合计   -->
    <div class="allPrice">合计:{{toallPrice}}</div>
    <!-- 购买 -->
    <div class="buy">购买({{allbuynum}})</div>
  </div>  
</template>

<script>
import checkButton from './checkButton'
export default {
  name: 'carBuyButton',
  components: {checkButton},
   data () {
     return {
       isAllCheck:true,
      //  toallPrice: 0
     }
   },
  computed: {
    isAllCheckCom() {
      if(this.$store.state.carList.length === 0) return false
      return !(this.$store.state.carList.filter(item => !item.isChecked).length)

      // return !this.$store.state.carList.find(item => !item.isChecked)

      // for(let item of this.$store.state.carList){
      //   if(!item.isChecked){
      //     return false
      //   }
      // }
      // return true
    },
    toallPrice() {
      return this.$store.state.carList.filter(item => {
        return item.isChecked
      }).reduce((preValue,item) =>{
        return preValue + item.price * item.count
      },0)
    },
    allbuynum() {
      return this.$store.state.carList.filter(item => item.isChecked).length
    }
  },
  methods: {
    allcheckbtn() {
      // 全选与购物车选择联动
      for (const iterator of this.$store.state.carList) {
        //如果全选按钮被选择
        if(this.isAllCheck) {
          //全部被赋值全选
          iterator.isChecked = true
          // console.log(iterator.isChecked);
        } else {
          this.isAllCheck = false
          iterator.isChecked = false
          //  console.log(iterator.isChecked);
          }
      }
      // 全选按钮的控制
      this.isAllCheck = !this.isAllCheck
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