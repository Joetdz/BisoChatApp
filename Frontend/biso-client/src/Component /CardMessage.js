import React from 'react';

const CardMessage = ({ display, pointer, message, from }) => {
    return (
        <div className={`message ${display}`}>
            <div className={`message-tile ${from}`}>
                <p> {message}</p>
                <div className={`pointer  ${pointer}`}></div>
            </div>
        </div>

    );
};

export default CardMessage;