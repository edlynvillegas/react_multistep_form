import React, { useContext, useEffect } from 'react';
// Components
import FormGroup from '../../reusable/form-group/FormGroup'
import Input from '../../reusable/input/Input'
import Textarea from '../../reusable/textarea/Textarea'
import FormFooter from '../../reusable/form-footer/FormFooter'
import FormHeader from '../../reusable/form-header/FormHeader'
// Context
import { UIContext } from '../../../context/UIContext'

const FormStep1 = React.memo(() => {
    const { activeStep, setActiveStep, setFormSteps, ACTIVE_ACTIONS } = useContext(UIContext);

    useEffect(() => {
        setFormSteps({ step: activeStep-1, types: { visited: true } })
        // eslint-disable-next-line
    }, [])

    const handleNext = () => {
        setFormSteps({ step: activeStep-1, types: { valid: true } })
        setActiveStep({ type: ACTIVE_ACTIONS.INCREMENT })
    }

    const handleCancel = () => {
        setActiveStep({ type: ACTIVE_ACTIONS.DECREMENT })
    }

    return (
        <>
            <FormHeader title="Load Details" step={1} />
            <form>
                <FormGroup title="What will be in this load?">
                    <Textarea
                        label="Describe what this load will contain (e.g. Sacks of Rice, Clothes, Food, etc.)"
                        name="description"
                    />
                </FormGroup>
                <FormGroup title="Budget">
                    <div className="grid grid-gap-10">
                        <div className="col-6 col-gap-10">
                            <Input
                                label="Minimum amount"
                                name="min_amount"
                                currency={true}
                            />
                        </div>
                        <span className="divider"></span>
                        <div className="col-6 col-gap-10">
                            <Input
                                label="Maximum amount"
                                name="max_amount"
                                currency={true}
                            />
                        </div>
                    </div>
                </FormGroup>
                <FormGroup title="Equipment Needed">
                    <Input label="Equipment Type"
                        name="equipment_type"
                    />
                    <div className="grid grid-gap-10">
                        <div className="col-6 col-gap-10">
                            <Input
                                label="Weight (in lbs)"
                                name="weight"
                            />
                        </div>
                        <div className="col-6 col-gap-10">
                            <Input
                                label="Size (in m)"
                                name="size"
                            />
                        </div>
                    </div>
                </FormGroup>
                <FormFooter handleCancel={handleCancel} handleNext={handleNext} />
            </form>
        </>
    )
})

export default FormStep1;