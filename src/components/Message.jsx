import React, { useEffect } from 'react'

const Message = ({ message, error, setError }) => {
    useEffect(() => {
        let timer;

        timer = setTimeout(() => {
            setError(false);
        }, 3000);

        return (() => clearTimeout(timer))
    }, [error]);

    return (
        <>{error && <p className="message__error">{message}</p>}</>
    )
}

export default Message