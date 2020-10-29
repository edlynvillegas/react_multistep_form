import React from 'react';
import './form-group.scss'

const FormGroup = React.memo(({ title, children }) => (
    <div className="form-group">
        <p>{ title }</p>
        { children }
    </div>
))

export default FormGroup;