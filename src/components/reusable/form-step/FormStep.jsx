import React, { useContext } from 'react';
import './form-step.scss';
// Context
import { UIContext } from '../../../context/UIContext'
// SVGs
import { ReactComponent as CheckSVG } from '../../../assets/icons/check.svg'

const FormStep = React.memo(({ step, title, icon, last }) => {
    const { activeStep, formSteps } = useContext(UIContext)
    let styles = 'step-content'
    if (activeStep>=step) {
        if (formSteps[step-1].valid) styles += ' done'
        else styles += ' active'
    }

    return (
        <>
            <div className={styles}>
                <div className="step-icon">{ formSteps[step-1].valid  ? <CheckSVG /> : icon}</div>
                <p>{title}</p>
            </div>
            {
                !last ?
                <span className={`step-progress ${activeStep>step ? 'active' : ''}`}></span> :
                null
            }
        </>
    )
})

export default FormStep;