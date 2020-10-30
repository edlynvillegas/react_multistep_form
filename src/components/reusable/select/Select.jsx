import React from 'react';
// import './input.scss'

const Select = React.memo(({ name, label, options, register }) => {
    return (
        <>
            <div className="input-group">
                <label htmlFor={name}>{ label }</label>
                <select name={name} id={name} ref={register}>
                    {
                        options.map((opt, index) => <option key={index} value={opt}>{opt}</option>)
                    }
                </select>
            </div>
        </>
    )
})

Select.defaultProps = {
    name: "select",
    label: "Select label",
    options: [
        'Option 1',
        'Option 2',
        'Option 3'
    ]
}

export default Select;