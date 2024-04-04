import React from 'react';

function MainLayout({ children }) {
    return (
        <div className='container'>
            <h1 className='lilita'>Bienvenido a la Biblioteca</h1>
            { children }
            <div className='fixed-bottom bg-secondary p-3 text-light'>Powered by Curso REACT</div>
        </div>
    );
}

export default MainLayout;