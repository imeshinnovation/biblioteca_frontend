import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./Css/Main.css";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cuenta from './Pages/Cuenta';
import Error405 from './Pages/Error405';

function App(props) {

  const [token, setToken] = React.useState(localStorage.getItem('token'))

  React.useEffect(()=>{
    setInterval(()=>{
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
      } else {
        setToken(null)
      }
    },1000)
    
  }, [token])

  return (
    <Router>
      <Routes>
        {token ?
          <>
           <Route path="/" element={<Home />} />
           <Route path="/cuenta" element={<Cuenta />} />
          </>
          :
          <Route path="/" element={<Login />} />
        }
        <Route path="*" element={<Error405 />} />
      </Routes>
    </Router>
  );
}

export default App;