import React from 'react';

import './styles.css';

const Information = () => {

    let alcohol = 2.58;
    let gasoline = 4.51;

    function handleChangeValues() {
        alert('aqui devemos mudar os valores da gasolina e alcool')
    }

    return (
        <div>
            <div className="visor">
                <p>Alcohol</p>
                <p>Gasoline</p>
            </div>
            <div className="values">
                <p>{alcohol}</p>
                <p>{gasoline}</p>
            </div>
            <div className="change-values">
                <button onClick={handleChangeValues}>
                    Change values
                </button>
            </div>
        </div>
    );
};

export default Information;