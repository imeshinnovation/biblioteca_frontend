import React, { useState } from 'react';
import { Card, Offcanvas, Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MainLayout({ children }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Biblioteca</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Perfíl del Usuario</Accordion.Header>
                            <Accordion.Body>
                                <Button style={{ width: '100%', marginBottom: 5 }}>Cambiar Contraseña</Button>
                                <Button style={{ width: '100%', marginBottom: 5 }}>Modificar Perfíl</Button>
                                <Button style={{ width: '100%', marginBottom: 5 }}>Eliminar Cuenta</Button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Elementos</Accordion.Header>
                            <Accordion.Body>
                                <Button style={{ width: '100%', marginBottom: 5 }}>Solicitar Libro</Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas>

            <div className='container'>
                <div className='headerTitle'>
                    <div style={{ marginRight: 10 }}>
                        <Button onClick={() => { handleShow() }}>
                            <FontAwesomeIcon icon={faBars} />
                        </Button>
                    </div>
                    <div><h1 className='lilita'>Bienvenido a la Biblioteca</h1></div>
                </div>
                <Card style={{
                    height: 'calc(100vh - 130px)',
                    boxShadow: '0px 0px 7px #bbb'
                }}>
                    <Card.Body style={{
                        overflowY: 'auto'
                    }}>
                        {children}
                    </Card.Body>
                </Card>
                <div className='fixed-bottom bg-secondary p-3 text-light'>Powered by Curso REACT</div>
            </div>
        </>
    );
}

export default MainLayout;