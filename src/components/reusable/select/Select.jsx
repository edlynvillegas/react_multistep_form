import React from 'react';
// import './input.scss'

const Select = React.memo(({ name, label, options }) => {
    return (
        <>
            <div className="input-group">
                <label htmlFor={name}>{ label }</label>
                <select name={name} id={name}>
                    {
                        options.map(opt => <option value={opt.value}>{opt.name}</option>)
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
        { value: 'value1', name: 'Option 1' },
        { value: 'value2', name: 'Option 2' },
        { value: 'value3', name: 'Option 3' }
    ]
}

export default Select;