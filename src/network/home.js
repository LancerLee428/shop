import {request} from "./request";

export function getHomeAllData() {
  //return一下才能被调用
  return request({
    url: '/api/index'
  })
}

export function getHomeGoods(string = 'sales', number = 1) {
  //return一下才能被调用
  return request({
    url: '/api/index?' + string + '=1&page=' + number,
  })
}
