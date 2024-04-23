import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Button } from 'react-bootstrap';
//import TimePicker from '../Components/TimePicker';
//import Helpers from '../Libs/Helpers';

function Home(props) {

    //const [ count, setCount ] = useState()

    /*  useEffect(()=>{
          Helpers.queryGet(`${Helpers.API_URI}/api/users/count`).then((datos)=>{
              setCount(datos)
          })
      },[]) */

    //Helpers.expireToken(Helpers.decodeJWT(localStorage.getItem('token')).exp)

    return (
        <MainLayout>
            <Button onClick={(e) => { e.preventDefault(); localStorage.removeItem('token') }} variant='outline-success' >
                Salir
            </Button>
            <div>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."</div>
        </MainLayout>
    );
}

export default Home;