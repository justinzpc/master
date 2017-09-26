/**
 * Created by Administrator on 2017/9/23.
 */
import Mock from 'mockjs'
const PorListApi = Mock('http://pl.cn', {
  'name': '@name',
  'age|1-100': 100,
  'color': '@color'
})
const SwipeApi = Mock('http://index.cn', {
  'name': '@name',
  'age|1-100': 100,
  'color': '@color'
})
const SwipeApi = Mock('http://swipelist.cn', {
  'name': '@name',
  'age|1-100': 100,
  'color': '@color'
})
export {
  PorListApi,
  SwipeApi,
  SwipeApi
}
