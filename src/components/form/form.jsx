import React, { useContext } from 'react';
import './form.scss';
// Context
import { UIContext } from '../../context/UIContext'
// Components
import FormStep1 from '../steps/form-step-1/FormStep1'
import FormStep2 from '../steps/form-step-2/FormStep2'
import FormStep3 from '../steps/form-step-3/FormStep3'
// SVGs
import { ReactComponent as BoxSVG } from '../../assets/icons/box.svg'

const Form = React.memo(() => {
    const { activeStep,submitted } = useContext(UIContext)

    const activeComponent = activeStep === 1 ? <FormStep1 /> :
    activeStep === 2 ? <FormStep2 /> :
    activeStep === 3 ? <FormStep3 /> :
    null

    return submitted ? <FormSuccess /> : activeComponent;
})

const FormSuccess = () => (
    <div className="form-success">
        <BoxSVG />
        <p>Posting this load..</p>
    </div>
)

export default Form;