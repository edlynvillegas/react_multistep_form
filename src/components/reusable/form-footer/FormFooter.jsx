import React from 'react';
import './form-footer.scss';
// Components
import Button from '../../reusable/button/Button'

const FormStepper = React.memo(({ handleSaveDraft, handleCancel, handleNext, handleSubmit }) => (
    <div className="form-footer grid">
        <div>
            {
                handleSaveDraft ?
                <Button handleClick={handleSaveDraft} color="primary-outline" text="Save as Draft" /> :
                null
            }
        </div>
        <div>
            <Button handleClick={handleCancel} color="accent" text="Cancel" />
            {
                handleNext ?
                <Button handleClick={handleNext} color="primary" text="Next" /> :
                handleSubmit ?
                <Button handleClick={handleSubmit} color="primary" text="Create Load" /> :
                null
            }
        </div>
    </div>
))

export default FormStepper;