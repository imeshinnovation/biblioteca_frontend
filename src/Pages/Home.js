import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Button, Card } from 'react-bootstrap';
import TimePicker from '../Components/TimePicker';

function Home(props) {
    return (
        <MainLayout>
        <Card>
                <Card.Header className='boldItalic'>Soy el Home</Card.Header>
                <Card.Body>
            <Button onClick={(e) => { e.preventDefault(); localStorage.removeItem('token') }} variant='outline-success' >Salir</Button>
            <TimePicker ancho="200" color="cyan" />
                </Card.Body>
        </Card>
        </MainLayout>
    );
}

export default Home;