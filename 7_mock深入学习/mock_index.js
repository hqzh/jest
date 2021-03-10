import axios from 'axios'

export const fetchData = () => {
    return axios.post('http://transpaas-test.sutpc.com/transpaas/api/v1/index/query', { "size": 10, "page": 0, "title": "规划" }).then(res => res.data)
}

export const getNumber = () => {
    return 200
}
