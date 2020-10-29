import React, { useContext, useEffect } from 'react';
// Components
import FormGroup from '../../reusable/form-group/FormGroup'
import Select from '../../reusable/select/Select'
import FormFooter from '../../reusable/form-footer/FormFooter'
import FormHeader from '../../reusable/form-header/FormHeader'
// Context
import { UIContext } from '../../../context/UIContext'

const FormStep3 = React.memo(() => {
    const { activeStep, setActiveStep, setFormSteps, setSubmitted, ACTIVE_ACTIONS } = useContext(UIContext);

    useEffect(() => {
        setFormSteps({ step: activeStep-1, types: { visited: true } })
        // eslint-disable-next-line
    }, [])

    const handleSubmit =() => {
        setFormSteps({ step: activeStep-1, types: { valid: true } })
        setSubmitted(true)
    }

    const handleSaveDraft = () => {
        console.log('SAVED AS DRAFT')
    }

    const handleCancel = () => {
        setActiveStep({ type: ACTIVE_ACTIONS.DECREMENT })
    }

    return (
        <>
            <FormHeader title="Schedule" />
            <form>
                <FormGroup title="Start Date">
                    <div className="grid grid-gap-10">
                        <div className="col-4 col-gap-10">
                            <Select
                                label="Month"
                                name="month"
                            />
                        </div>
                        <div className="col-4 col-gap-10">
                            <Select
                                label="Day"
                                name="day"
                            />
                        </div>
                        <div className="col-4 col-gap-10">
                            <Select
                                label="Year"
                                name="year"
                            />
                        </div>
                    </div>
                </FormGroup>
                <FormGroup title="End Date">
                    <div className="grid grid-gap-10">
                        <div className="col-4 col-gap-10">
                            <Select
                                label="Month"
                                name="month"
                            />
                        </div>
                        <div className="col-4 col-gap-10">
                            <Select
                                label="Day"
                                name="day"
                            />
                        </div>
                        <div className="col-4 col-gap-10">
                            <Select
                                label="Year"
                                name="year"
                            />
                        </div>
                    </div>
                </FormGroup>
                <FormFooter handleSaveDraft={handleSaveDraft} handleCancel={handleCancel} handleSubmit={handleSubmit} />
            </form>
        </>
    )
})

export default FormStep3;