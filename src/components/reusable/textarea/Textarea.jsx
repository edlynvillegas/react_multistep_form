import React from 'react';
// import './text.scss'

const Textarea = React.memo(({ name, label }) => {
    return (
        <>
            <div className="input-group">
                <label htmlFor={name}>{ label }</label>
                <textarea id={name} name={name} rows="6"></textarea>
            </div>
        </>
    )
})

export default Textarea;