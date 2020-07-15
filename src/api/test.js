import axios from '../config/api.request'

export default {
    // 获取设备列表(新)
    getDevList(params) {
        return axios.request({
            // url: 'system/dev/search',
            url: 'system/dev/searchVideos',
            method: 'post',
            data: JSON.stringify(params)
        })
    },
    //获取流媒体服务
    getVideoServe(params) {
        return axios.request({
            url: 'platform/service/searchByType',
            method: 'post',
            data: JSON.stringify(params)
        })
    },
}
