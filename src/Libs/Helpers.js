
const API_URI = 'http://192.168.0.23:9090'

const queryWithoutAuth = async (EndPoint, Method, body) => {
    return await fetch(API_URI + EndPoint, {
        method: Method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(resp => resp.json())
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { API_URI, queryWithoutAuth }