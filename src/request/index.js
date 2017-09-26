/**
 * Created by Administrator on 2017/9/23.
 */
import axios from 'axios'
import qs from 'qs'
export default {
  post(url, data) {
    return axios({
      method: 'post', // 请求协议
      url: url, // 请求的地址
      data: qs.stringify(data), // post 请求的数据
      timeout: 30000, // 超时时间, 单位毫秒
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get(url, params) {
    return axios({
      method: 'get',
      url: url,
      params, // get 请求时带的参数
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
}
