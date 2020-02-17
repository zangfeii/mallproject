import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carList: []
  },
  mutations: {
    addCart(state, payload) {
      // const oldGood = null
      // const  len =  state.carList.length
      // if(len) {
      //   for (var index = 0; index < len; index++) {
      //     if (state.carList[index].iid === payload.iid) {
      //       state.carList[index].count += 1
      //     } else {
      //       payload.count = 1
      //       state.carList.push(payload)
      //     }
      //   }
      // } else {
      //   payload.count = 1
      //   state.carList.push(payload)
      // }

      let oldGood = state.carList.find(item => item.iid === payload.iid)
      if (oldGood) {
        oldGood.count += 1
      } else {
        payload.count = 1
        payload.isChecked = true
        state.carList.push(payload)
      }
      // return new Promise((resolve, reject) => {
      //   let oldGood = state.carList.find(item => item.iid === payload.iid)
      //   if (oldGood) {
      //     oldGood.count += 1
      //     resolve('当前商品数量加以')
      //   } else {
      //     payload.count = 1
      //     payload.isChecked = true
      //     state.carList.push(payload)
      //     resolve('添加新的商品')
      //   }
      // })


    }
  },
  actions: {},
  modules: {}
})