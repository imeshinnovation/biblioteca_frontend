import { Buffer } from "buffer"

const API_URI = 'https://foolish-jorie-imeshinnovation.koyeb.app'
//const API_URI = 'http://localhost:8000'

const queryWithoutAuth = async (EndPoint, Method, body) => {
    return await fetch(EndPoint, {
        method: Method,
        headers: {
            'Accept': 'application / json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
}

const queryGet = async (EndPoint) => {
    return await fetch(EndPoint, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Accept': 'application / json',
            'Content-Type': 'application/json'
        },
    }).then((res) => {
            return res.json()
    })
}

const decodeJWT = (token) => {
    const parts = token.split('.').map((part) => {
        return Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
    });
    return JSON.parse(parts[1].toString());
}

const expireToken = (fecha) => {
    const feca = Date.now()
    const newFecha = (fecha * 1000)
    if(feca >= newFecha ) {
        localStorage.removeItem('token')
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { API_URI, queryWithoutAuth, queryGet, decodeJWT, expireToken }