<template>
  <div id="app">
    
    <main-tab-bar></main-tab-bar>
    <!-- <MainTabBar></MainTabBar> -->
    <router-view></router-view>
  </div>
</template>
 
 <script>
 import  MainTabBar from '../src/components/content/mainTabbar/MainTabBar'
 export default {
   name:'app',
   components:{
     MainTabBar
   }
 }
 </script>
<style>
   @import '../src/assets/css/base.css';
</style>
