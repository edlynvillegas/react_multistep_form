import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// Components
import FormGroup from '../../reusable/form-group/FormGroup'
import Input from '../../reusable/input/Input'
import FormFooter from '../../reusable/form-footer/FormFooter'
import FormHeader from '../../reusable/form-header/FormHeader'
// Context
import { UIContext } from '../../../context/UIContext'

const FormStep3 = React.memo(() => {
    const { activeStep, setActiveStep, formData, setFormData, setFormSteps, ACTIVE_ACTIONS } = useContext(UIContext);
    
    const secondSchema = yup.object().shape({
        pickup: yup.object().shape({
            address: yup.string().required('Address is required'),
            city: yup.string().required('City is required'),
            barangay: yup.string().required('Barangay is required')
        }),
        delivery: yup.object().shape({
            address: yup.string().required('Address is required'),
            city: yup.string().required('City is required'),
            barangay: yup.string().required('Barangay is required')
        })
    });
    
    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(secondSchema), defaultValues: formData });

    useEffect(() => {
        setFormSteps({ step: activeStep-1, types: { visited: true } })
        // eslint-disable-next-line
    }, [])

    const handleNext = (data) => {
        setFormData(prev => ({...prev, ...data}))
        setFormSteps({ step: activeStep-1, types: { valid: true } })
        setActiveStep({ type: ACTIVE_ACTIONS.INCREMENT })
    }

    const handleCancel = () => {
        setActiveStep({ type: ACTIVE_ACTIONS.DECREMENT })
    }

    return (
        <>
        <FormHeader title="Pickup and Delivery" />
            <form onSubmit={handleSubmit(handleNext)} noValidate>
                <FormGroup title="Where will this be pickup?">
                    <Input
                        error={errors.pickup && errors.pickup.address}
                        register={register}
                        label="Address"
                        name="pickup.address"
                    />
                    <div className="grid grid-gap-10">
                        <div className="col-6 col-gap-10">
                            <Input
                                error={errors.pickup && errors.pickup.city}
                                register={register}
                                label="City"
                                name="pickup.city"
                            />
                        </div>
                        <div className="col-6 col-gap-10">
                            <Input
                                error={errors.pickup && errors.pickup.barangay}
                                register={register}
                                label="Barangay"
                                name="pickup.barangay"
                            />
                        </div>
                    </div>
                </FormGroup>
                <FormGroup title="Where will this be delivered?">
                    <Input
                        error={errors.delivery && errors.delivery.address}
                        register={register}
                        label="Address"
                        name="delivery.address"
                    />
                    <div className="grid grid-gap-10">
                        <div className="col-6 col-gap-10">
                            <Input
                                error={errors.delivery && errors.delivery.city}
                                register={register}
                                label="City"
                                name="delivery.city"
                            />
                        </div>
                        <div className="col-6 col-gap-10">
                            <Input
                                error={errors.delivery && errors.delivery.barangay}
                                register={register}
                                label="Barangay"
                                name="delivery.barangay"
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