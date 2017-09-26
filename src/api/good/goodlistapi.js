/**
 * Created by Administrator on 2017/9/24.
 */
import request from '../../request/index.js'

export const getGoodList = (params) => request.get('/huiyahui/get-session-redirect-url/', {params})
