import axios from 'axios'
//请求信息配置
// axios.defaults.baseURL = ''
// axios.defaults.timeout = 5000

//创建实例,多服务器请求
// const instance1 = axios.create({
//   baseURL: '',
//   timeout: 5000
// })

export function request(config) {
  // return new Promise((resolve, reject) => {
  const instance1 = axios.create({
    //创建实例并配置
    baseURL: 'http://123.207.32.32:8000/api/hy',
    timeout: 5000
  })

  // instance1({
  //   url:'home/data',
  //   params:{
  //     type: 'pop',
  //     page: 1
  //   }
  //  }).then(res =>{
  // })


  //axios请求拦截器
  instance1.interceptors.request.use(config => {
    //成功拦截请求配置

    //拦截成功需要返回
    return config
  }, err => {
    //失败
    console.log(err);
  })

  //axios响应拦截
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance1(config)

  // })
}