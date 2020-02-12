<template>
  <div class="goodParams">
    <p>{{ruleData.desc}}</p>
    <p>{{ruleData.key}}:</p>
    <!-- 商品尺寸 -->
    <div class="size" v-for="(item, index) in  ruleData.tables[0]" :key="index">
       <span class="sizespace" v-for="(item1, index) in item" :key="index">
         {{item1}}
       </span>
    </div>
    <!-- 商品说明 -->
    <div class="rulesize" v-for="(item, index) in ruleData.set" :key="index">
      <span>{{item.key}}</span>
      <span class="space">{{item.value}}</span>
    </div>
    <br>
     <p>{{ruleData.disclaimer}}</p>
  </div>
</template>

<script>
export default {
  name: 'detailGoodsParams',
  props:{
    ruleData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style>
  .goodParams {
    margin-top: 30px;
  }

  .rulesize {
    padding: 10px;
  }

  .size {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    padding: 12px;
  }

  .space {
    padding-left: 50px;
    color: pink;
  }
</style>