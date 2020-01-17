<template>
<div class="recommend">
  <div v-for="item in recommends">
    <a href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 0 25px;
}

.recommend img{
  width: 80px;
  height: 80px;
  margin: 7px;
}
</style>