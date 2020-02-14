<template>
  <div id="carlist">
    <car-list-item v-for="(item, index) in $store.state.carList" :key="index" :caritem='item'></car-list-item>
  </div>
</template>

<script>
import carListItem from './carListItem'
export default {
  name: 'carList',
  components: {
    carListItem
  }
}
</script>

<style>
  #carlist {
    width: 100%;
  }
</style>