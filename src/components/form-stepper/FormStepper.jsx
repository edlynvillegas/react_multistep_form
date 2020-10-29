import React, { useContext } from 'react';
import './form-stepper.scss';
// Context
import { UIContext } from '../../context/UIContext'
// Components
import FormStep from '../reusable/form-step/FormStep'

const FormStepper = React.memo(() => {
    const { formSteps } = useContext(UIContext)

    return (
        <div className="form-stepper">
            {
                formSteps.map((s, i) => <FormStep {...s} last={i === formSteps.length-1} key={s.step} />)
            }
        </div>
    )
})

export default FormStepper;