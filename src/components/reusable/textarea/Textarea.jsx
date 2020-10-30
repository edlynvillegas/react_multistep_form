import React from 'react';
// import './text.scss'

const Textarea = React.memo(({ name, label, error, register }) => {
    return (
        <>
            <div className="input-group">
                <label htmlFor={name}>{ label }</label>
                <textarea id={name} name={name} rows="6"
                    ref={register}></textarea>
                {
                    error ? <span className="input-error">{ error.message }</span> : null
                }
            </div>
        </>
    )
})

export default Textarea;