import React from 'react';
import '../Style/Psychology.css'
const Introduction = (props) => {
    return (
        <div>
            <div className="market-psychology-fun">
                <h1> {props.title}</h1>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
};

export default Introduction;
