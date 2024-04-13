import React, { useState, useEffect } from 'react';
import { Col, Container, Form, InputGroup, Row, Button } from 'react-bootstrap';
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
    const [ count, setCount ] = useState()

    const [steps, setSteps] = useState(0)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const butNext = (e) => {
        e.preventDefault();
        if(steps === 0){
            Helpers.queryWithoutAuth(`${Helpers.API_URI}/api/users/verifyemail`, 'POST', { email: mail }).then((data) => {
                if(data.verify){
                    setViewMail(false)
                    setViewPasswd(true)
                    setSteps(1)
                } else {
                    alert('Correo No Existe!')
                }
            })
            
        } else if (steps === 1){
            console.log(passwd)
            setViewPasswd(false)
            setViewOtp(true)
            setSteps(2)
        } else if (steps === 2){
            console.log(otp)
        }
    }

    //useEffect(() => {
    //    Helpers.queryGet(`${Helpers.API_URI}/api/users/count`).then((datos) => {
    //        setCount(datos)
    //    })
    //}, [])


    return (
        <Container fluid className='mainContainer'>
            <Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Row style={{ height: 500, width: '100%' }}>
                    <Col style={{ backgroundColor: 'rgba(255, 90, 0, 0)' }}>
                        <div className='fw-bold text-warning lilita' style={{ fontSize: 62, textShadow: '1px 1px 3px #009' }}>Biblioteca</div>
                        <div className='text-light' style={{ fontSize: 32 }}>Gestión, Control y Prestamo de Libros {count}</div>
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
                        <Lottie options={defaultOptions}
                            height={400}
                            width={400}
                        />
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