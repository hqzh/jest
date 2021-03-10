import { fetchData} from './mock_index'
import Axios from 'axios'
jest.mock('axios')
test('fetchData mock', () => {
    Axios.post.mockResolvedValue({
        data: "(function(){return '123'})()"
    })
    return fetchData().then(res => {
        expect(eval(res)).toEqual('123')
    })
})



