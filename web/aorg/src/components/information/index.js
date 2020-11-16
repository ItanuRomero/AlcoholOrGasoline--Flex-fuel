import React from 'react';

import './styles.css';

const Information = () => {
    return (
        <div>
            <div className="visor">
                <p>Alcohol</p>
                <p>Gasoline</p>
            </div>
            <div className="values">
                <p>2.48</p>
                <p>4.50</p>
            </div>
            <div className="change-values">
                <button>
                    Change values
                </button>
            </div>
        </div>
    );
};

export default Information;