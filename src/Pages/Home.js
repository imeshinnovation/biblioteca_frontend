import React, { useEffect, useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Button, Card } from 'react-bootstrap';
import TimePicker from '../Components/TimePicker';
import Helpers from '../Libs/Helpers';

function Home(props) {

    const [ count, setCount ] = useState()

  /*  useEffect(()=>{
        Helpers.queryGet(`${Helpers.API_URI}/api/users/count`).then((datos)=>{
            setCount(datos)
        })
    },[]) */

    return (
        <MainLayout>
        <Card>
                <Card.Header className='boldItalic'>Soy el Home</Card.Header>
                <Card.Body>
            <Button onClick={(e) => { e.preventDefault(); localStorage.removeItem('token') }} variant='outline-success' >Salir</Button>
            <TimePicker ancho="200" color="cyan" />
                </Card.Body>
                <Card.Footer>
                    { localStorage.getItem('token') }
                </Card.Footer>
        </Card>
        </MainLayout>
    );
}

export default Home;