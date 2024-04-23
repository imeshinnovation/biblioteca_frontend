import React, { useState } from 'react';
import { Col, Container, Form, InputGroup, Row, Button, Alert, Image } from 'react-bootstrap';
import Lottie from 'react-lottie';
import * as animationData from '../Assets/Json/Biblioteca.json'
import Helpers from '../Libs/Helpers'


function Login(props) {

    const [viewMail, setViewMail] = React.useState(true)
    const [viewPasswd, setViewPasswd] = React.useState(false)
    const [viewOtp, setViewOtp] = useState(false)

    const [mail, setMail] = useState()
    const [passwd, setPasswd] = useState()
    const [otp, setOtp] = useState()
    //const [count, setCount] = useState()

    const [steps, setSteps] = useState(0)

    const [viewAlert, setViewAlert] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [variantAlert, setVariantAlert] = useState('')
    const [viewQR, setViewQR] = useState(false)
    const [image64, setImage64] = useState('')
    const [getID, setGetID] = useState('')

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const showAlert = (msg, variant, tiempo) => {
        setMsgAlert(msg)
        setVariantAlert(variant)
        setViewAlert(true)
        setTimeout(() => {
            setViewAlert(false)
        }, tiempo)
    }

    const butNext = (e) => {
        e.preventDefault();
        if (steps === 0) {
            Helpers.queryWithoutAuth(`${Helpers.API_URI}/api/users/verifyemail`, 'POST', { email: mail }).then((data) => {
                if (data.verify) {
                    setViewMail(false)
                    setViewPasswd(true)
                    setSteps(1)
                } else {
                    showAlert('Correo No Existe, Verifica e Intenta Nuevamente!', 'danger', 5000)
                }
            })

        } else if (steps === 1) {
            Helpers.queryWithoutAuth(`${Helpers.API_URI}/api/users/verifyemailpasswd`, 'POST', { email: mail, password: passwd }).then((data) => {
                console.log(data)
                if (data.verify) {
                    Helpers.queryWithoutAuth(`${Helpers.API_URI}/api/users/qr`, 'POST', { id: data.id }).then((imagen) => {
                        console.log(imagen.qr)
                        setImage64(imagen.qr)
                        if(data.a2f === 0){
                            setViewQR(true)
                        }
                        
                    })
                    setGetID(data.id)
                    setViewPasswd(false)
                    setViewOtp(true)
                    setSteps(2)
                } else {
                    showAlert('Contraseña Incorrecta, Verifica e Intenta Nuevamente!', 'danger', 5000)
                }
            })

        } else if (steps === 2) {
            Helpers.queryWithoutAuth(`${Helpers.API_URI}/api/users/verify`, 'POST', { id: getID, otp }).then((data) => {
                if(data.verify){
                    Helpers.queryWithoutAuth(`${Helpers.API_URI}/api/users/upd`, 'POST', { id: getID, a2f: 1 }).then((result) => {
                        console.log(result)
                    })
                    localStorage.setItem('token', data.verify)
                } else {
                    showAlert('Código de Seguridad Incorrecto, Verifica e Intenta Nuevamente!', 'danger', 5000)
                }
            })
        }
    }

    //useEffect(() => {
    //    Helpers.queryGet(`${Helpers.API_URI}/api/users/count`).then((datos) => {
    //        setCount(datos)
    //    })
    //}, [])


    return (

        <Container fluid className='mainContainer'>
            <div style={{ justifyContent: 'center', alignItems: 'center', position: 'fixed', width: '100%', margin: 0, padding: 20 }}>
                <Alert variant={variantAlert} className='shadow-sm' style={{
                    flex: 1,
                    textAlign: 'center',
                    width: 'auto',
                    margin: 0,
                    display: viewAlert ? 'block' : 'none'
                }}>{msgAlert}</Alert>
            </div>
            <Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Row style={{ height: 500, width: '100%' }}>
                    <Col style={{ backgroundColor: 'rgba(255, 90, 0, 0)' }}>
                        <div className='fw-bold text-warning lilita' style={{ fontSize: 62, textShadow: '1px 1px 3px #009' }}>Biblioteca</div>
                        <div className='text-light' style={{ fontSize: 32 }}>Gestión, Control y Prestamo de Libros</div>
                        <div style={{ height: 60, marginTop: 50 }}>
                            <InputGroup className='shadow-sm' style={{ height: 60, display: viewMail ? '' : 'none' }}>
                                <Form.Control
                                    type='email'
                                    placeholder='Correo Electrónico'
                                    onChange={(e) => { setMail(e.target.value) }}
                                />
                                <Button style={{ width: 160 }} onClick={(e) => { butNext(e) }}>Siguiente</Button>
                            </InputGroup>
                            <InputGroup className='shadow-sm' style={{ height: 60, display: viewPasswd ? '' : 'none' }}>
                                <Form.Control
                                    type='password'
                                    placeholder='Contraseña'
                                    onChange={(e) => { setPasswd(e.target.value) }}
                                />
                                <Button style={{ width: 160 }} onClick={(e) => { butNext(e) }}>Siguiente</Button>
                            </InputGroup>
                            <InputGroup className='shadow-sm' style={{ height: 60, display: viewOtp ? '' : 'none' }}>
                                <Form.Control
                                    type='number'
                                    placeholder='Código de Seguridad'
                                    onChange={(e) => { setOtp(e.target.value) }}
                                />
                                <Button style={{ width: 160 }} onClick={(e) => { butNext(e) }}>Siguiente</Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col>
                    { viewQR ?
                        <Image src={image64} style={{
                            height: 400,
                            width: 400,
                            borderRadius: 10,
                            boxShadow: '0px 0px 10px #345'
                        }} />
                        :
                        <Lottie options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    }
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

/*
<div style={{ fontSize: 40 }}>Soy el Login
            <button onClick={(e) => { e.preventDefault(); localStorage.setItem('token', 'sdfgdfgdsfdsfgdf') }}>Iniciar Sesion</button>
        </div>
*/

export default Login;