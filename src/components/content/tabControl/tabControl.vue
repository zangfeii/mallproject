<template>
<div class="tabcontral">
  <div v-for="(item ,index) in titles" class="tab-contral-item" 
  :class="{active: index === currentIndex}" @click="tabItemClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'tabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index
    }
  },
}
</script>

<style>
  .tabcontral {
    display: flex;
    text-align: center;
    background-color: #fff;
  }

  .tab-contral-item {
    flex: 1;
    line-height: 44px;
    height: 44px;
  }

  .active {
    color: pink;
    /* border-bottom: 3px solid pink; */
  }

  .active span{
    border-bottom: 3px solid pink;
  }

  .tab-contral-item span {
    padding: 6px;
  }

</style>