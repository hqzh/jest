import axios from 'axios'

// node --experimental-modules fetchData.mjs (实验室特性，后缀名改)
export const fetchData = async (fn) => {
    const res = await axios.post('http://transpaas-test.sutpc.com/transpaas/api/v1/index/query', { "size": 10, "page": 0, "title": "规划" })
    fn(res.data.code)
}


export const fetchPromise = () => {
    return axios.post('http://transpaas-test.sutpc.com/transpaas/api/v1/index/query', { "size": 10, "page": 0, "title": "规划" })
}

export const fetch404 = () => {
    return axios.post('http://transpaas-test.sutpc.com/transpaas/api/v1/index/query404', { "size": 10, "page": 0, "title": "规划" })
}
