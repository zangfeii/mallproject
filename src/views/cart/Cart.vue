<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">购物车({{this.$store.state.carList.length}})</div> 
    </nav-bar>
    <scroll class="connent">
      <car-list></car-list>
    </scroll>
    <car-buy-button class="buyBtn"   v-show="this.$store.state.carList.length"></car-buy-button>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import scroll from '../../components/common/scroll/srcoll'

import carList from './childComps/carList'
import carBuyButton from './childComps/carBuyButton'

export default {
  name:'Cart',
  components: {
    NavBar,
    scroll,
    carList,
    carBuyButton
  },
  data () {
    return {
      // isALLCheck: true
    }
  },
  methods: {
    // allCheckBtn() {
    //   this.isALLCheck = !this.isALLCheck
    // }
  }
}
</script>

<style>
  .navbar {
    position: relative;
    background: pink;
    /* z-index: 9; */
  }

  .connent {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 98px;
    left: 0;
    right: 0;
  }

  .buyBtn {
    width: 100%;
    position:absolute;
    bottom: 49px;
  }
</style>