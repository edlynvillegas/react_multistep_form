import React from 'react';
// import './input.scss'

const Button = React.memo(({ type, text, color, handleClick }) => {
    return (
        <>
            <button type={type}
                className={`btn btn-${color}`}>
                {text}
            </button>
        </>
    )
})
Button.defaultProps = {
    type: "button",
    text: "Button Text",
    color: "default"
}

export default Button;