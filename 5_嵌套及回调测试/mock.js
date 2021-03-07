import axios from 'axios'

export const runCallback = (callback) => {
    callback('hqzh')
}

export const createCallback = (callback) => {
    new callback()
}

export const fetchData = () => {
    return axios.post('http://transpaas-test.sutpc.com/transpaas/api/v1/index/query', { "size": 10, "page": 0, "title": "规划" }).then(res => res.data)
}