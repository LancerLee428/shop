import axios from 'axios';

//暴露一个方法request
export function request(config) {
  //实例化
  const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn',
    timeout: 5000,
  });

  //2.请求拦截
  instance.interceptors.request.use(config =>{
    //如果有一个接口需要认证才可以访问，就在这里统一设置

    return config
  }, err =>{

  });

  //3.响应拦截
  instance.interceptors.response.use(res =>{
    //成功一般不操作
    //不想在外部打印的话在这里打印即可 res.log
    return res.data ? res.data : res;
  }, err => {
    //如果有错误，就要进行处理
  });

  return instance(config);
}