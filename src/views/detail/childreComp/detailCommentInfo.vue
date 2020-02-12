<template>
  <div class="usercomm">
    <div class="showuser">
      <span>用户评价</span>
      <span>更多</span>
    </div>

    <div class="user">
      <img :src="userComment.user.avatar" alt="">
      <span class="username">{{userComment.user.uname}}</span>
    </div>
    <!-- 评价 -->
    <div class="comment">
      <p>{{userComment.content}}</p>
    </div>

    <!-- 用户购买信息 -->
    <div class="shopingInfo">
      <span class="createTime">{{userComment.created | showdate}}</span>
      <span>{{userComment.style}}</span>
      <!-- <span>{{userComment}}</span> -->
    </div>

    <!-- 图片评价 -->
    <div class="picComment">
      <img :src="item" alt="" v-for="(item, index) in userComment.images" :key="index">
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailCommentInfo',
  props: {
    userComment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters :{
    showdate(value) {
      const dt = new Date(value*1000)
      var y = dt.getFullYear()
      var m = (dt.getMonth() + 1).toString().padStart(2, '0')
      var d = dt.getDate().toString().padStart(2, '0')
      var hh = dt.getHours().toString().padStart(2, '0')
      var mm = dt.getMinutes().toString().padStart(2, '0')
      var ss = dt.getSeconds().toString().padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    }
  }
}
</script>

<style>
  .usercomm {
    position: relative;
    /* padding: 10px; */
  }
  .user img {
    width: 50px;
    border-radius: 50%;
  }

  .username {
    position: absolute;
    top: 65px;
    margin-left: 10px;
  }

  .comment {
    margin-bottom: 10px;
  }

  .createTime {
    margin-right: 10px;
  }
  
  .picComment {
    margin-top: 20px;
    height: 100px;
    overflow: hidden;
  }

  .picComment img {
    width: 100px;
    /* height: 100px; */
  }

  .showuser {
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
</style>