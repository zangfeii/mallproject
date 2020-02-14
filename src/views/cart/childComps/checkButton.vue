<template>
  <div :class="{checkbutton:ischek}">
    <img src="../../../assets/img/cart/tick.svg" alt="" class="checkbuttonimg">  
  </div>  
</template>

<script>
export default {
  name: 'checkButton',
  props: {
    ischek: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
  .checkbuttonimg {
    border: 1px solid #919191;
    border-radius: 50%;
    width: 15px;
  }

  .checkbutton {
    background: red;
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }
</style>