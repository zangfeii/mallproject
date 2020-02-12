<template>
  <div class="goods">
    <home-good-list-item v-for="item in goods" :gooditem= 'item' :key="item.title" />
      <!-- {{goods}} -->
    <home-good-list-item/>
  </div> 
</template>

<script>
  import homeGoodListItem from './homeGoodListItem'
export default {
  name: 'homeGoodList',
  components :{
    homeGoodListItem
  },
  props: {
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>
  
<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
  }
</style>