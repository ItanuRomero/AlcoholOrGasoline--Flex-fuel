import React from 'react';

import './styles.css';


const Response = () => {
    const alcohol = 2.48;
    const gasoline = 4.50;

    let message = ''

    if (alcohol <= (gasoline * 0.7)){
        message = 'You have to choose alcohol!'
    } else {
        message = 'You have to choose gasoline!'
    }

    return (
        <div className="message">
            <p>{message}</p>
        </div>
    );
};

export default Response;