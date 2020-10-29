import React, { useContext, useEffect } from 'react';
// Components
import FormGroup from '../../reusable/form-group/FormGroup'
import Input from '../../reusable/input/Input'
import FormFooter from '../../reusable/form-footer/FormFooter'
import FormHeader from '../../reusable/form-header/FormHeader'
// Context
import { UIContext } from '../../../context/UIContext'

const FormStep3 = React.memo(() => {
    const { activeStep, setActiveStep, setFormSteps, ACTIVE_ACTIONS } = useContext(UIContext);

    useEffect(() => {
        setFormSteps({ step: activeStep-1, types: { visited: true } })
        // eslint-disable-next-line
    }, [])

    const handleNext =() => {
        setFormSteps({ step: activeStep-1, types: { valid: true } })
        setActiveStep({ type: ACTIVE_ACTIONS.INCREMENT })
    }

    const handleCancel = () => {
        setActiveStep({ type: ACTIVE_ACTIONS.DECREMENT })
    }

    return (
        <>
        <FormHeader title="Pickup and Delivery" />
            <form>
                <FormGroup title="Where will this be pickup?">
                    <Input
                        label="Address"
                        name="address"
                    />
                    <div className="grid grid-gap-10">
                        <div className="col-6 col-gap-10">
                            <Input
                                label="City"
                                name="city"
                            />
                        </div>
                        <div className="col-6 col-gap-10">
                            <Input
                                label="Barangay"
                                name="barangay"
                            />
                        </div>
                    </div>
                </FormGroup>
                <FormGroup title="Where will this be delivered?">
                    <Input
                        label="Address"
                        name="address"
                    />
                    <div className="grid grid-gap-10">
                        <div className="col-6 col-gap-10">
                            <Input
                                label="City"
                                name="city"
                            />
                        </div>
                        <div className="col-6 col-gap-10">
                            <Input
                                label="Barangay"
                                name="barangay"
                            />
                        </div>
                    </div>
                </FormGroup>
                <div className="form-note">
                    <p>
                        <strong>Important Note</strong>: Only the accepted carrier will see your complete address details. Bidders will only see <strong><i>City</i></strong> and <strong><i>Barangay</i></strong>
                    </p>
                </div>
                <FormFooter handleCancel={handleCancel} handleNext={handleNext} />
            </form>
        </>
    )
})

export default FormStep3;