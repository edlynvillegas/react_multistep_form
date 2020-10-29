import React from 'react';
// import './input.scss'

const Input = React.memo(({ name, label, currency }) => {
    return (
        <>
            <div className="input-group">
                <label htmlFor={name}>{ label }</label>
                { currency ? <span>Php</span> : null }
                <input style={{ paddingLeft: currency ? '50px' : '10px'}} id={name} type="text" />
            </div>
        </>
    )
})

export default Input;