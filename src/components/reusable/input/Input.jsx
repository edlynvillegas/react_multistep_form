import React from 'react';
// import './input.scss'

const Input = React.memo(({ type, name, label, currency, error, register }) => (
    <>
        <div className="input-group">
            <label htmlFor={name}>{ label }</label>
            { currency ? <span className="sub-label">Php</span> : null }
            <input
                id={name} name={name} type={ currency ? 'number' : type}
                style={{ paddingLeft: currency ? '50px' : '10px'}}
                ref={register}
            />
            {
                error ? <span className="input-error">{ error.message }</span> : null
            }
        </div>
    </>
))

Input.defaultProps = {
    type: 'text',
    name: 'input_name',
    label: 'Input label',
    currency: false
}

export default Input;