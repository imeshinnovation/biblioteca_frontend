import React from 'react';

function TimePicker(props) {
    return (
        <div>
            <input type='date' className='form-control' style={{ width: parseInt(props.ancho), backgroundColor: props.color }} />
        </div>
    );
}

export default TimePicker;