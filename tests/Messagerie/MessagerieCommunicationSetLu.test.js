import axios from 'axios'
import {APP_VERSION, BASE_URL} from "../../dist/Kdecole";

const Kdecole = require('../../dist/Kdecole.js').default

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

jest.mock('axios')
axios.request.mockResolvedValue({
    data: {}
})

describe('Test Messagerie set lu', () => {
    beforeEach(() => {
        axios.mockClear()
    })
    it('should call the right url', async () => {
        await user.setCommunicationLu(123456)
        expect(axios.request).toBeCalledWith({
            "baseURL": BASE_URL,
            "data": {
                "action":"lu"
            },
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "put",
            "responseType": "json",
            "url": "/messagerie/communication/lu/123456/"
        })
    })
})
