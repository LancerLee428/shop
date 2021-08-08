import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL:'',
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
    return config
  }, err => {

  });

  instance.interceptors.response.use(res => {
    return res.data ? res.data : res;
  }, err => {

  });

  //返回实例
  return instance(config)
}