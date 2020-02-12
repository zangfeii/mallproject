<template>
  <div id="app">  
    <!-- exclude 排除不需要缓存的组件  detail是name -->
    <keep-alive exclude="detail">
       <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="zindex"></main-tab-bar>
    <!-- <MainTabBar></MainTabBar> -->
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
   .zindex{
     z-index: 10;
     /* padding: 0px !important; */
   }
</style>
