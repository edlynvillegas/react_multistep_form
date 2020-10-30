import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// Components
import FormGroup from '../../reusable/form-group/FormGroup'
import Input from '../../reusable/input/Input'
import Textarea from '../../reusable/textarea/Textarea'
import FormFooter from '../../reusable/form-footer/FormFooter'
import FormHeader from '../../reusable/form-header/FormHeader'
// Context
import { UIContext } from '../../../context/UIContext'

const FormStep1 = React.memo(() => {
    const { activeStep, setActiveStep, formData, setFormData, setFormSteps, ACTIVE_ACTIONS } = useContext(UIContext);
    
    const firstSchema = yup.object().shape({
        description: yup.string().required('Description is required'),
        budget: yup.object().shape({
            min: yup.number()
                .positive('Please input valid amount')
                .required('Please input the minimum budget'),
            max: yup.number()
                .positive('Please input valid amount')
                .required('Please input the maximum budget')
        }),
        equipment: yup.object().shape({
            type: yup.string().required('Equipment type is required'),
            weight: yup.number()
                .positive('Please input valid weight')
                .required('Please input equipment weight'),
            size: yup.number()
                .positive('Please input valid amount')
                .required('Please input equipment size')
        })
    });
    
    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(firstSchema), defaultValues: formData });

    useEffect(() => {
        setFormSteps({ step: activeStep-1, types: { visited: true } })
        // eslint-disable-next-line
    }, [])

    // useEffect(() => {
    //     if (errors) setFormSteps({ step: activeStep-1, types: { valid: false } })
    //     else setFormSteps({ step: activeStep-1, types: { valid: true } })
    //     // eslint-disable-next-line
    // }, [errors])

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
            <FormHeader title="Load Details" step={1} />
            <form onSubmit={handleSubmit(handleNext)} noValidate>
                {/* <button type="submit">Submit!</button> */}
                <FormGroup title="What will be in this load?">
                    <Textarea
                        error={errors.description} register={register}
                        label="Describe what this load will contain (e.g. Sacks of Rice, Clothes, Food, etc.)"
                        name="description"
                    />
                </FormGroup>
                <FormGroup title="Budget">
                    <div className="grid grid-gap-10">
                        <div className="col-6 col-gap-10">
                            <Input
                                error={errors.budget && errors.budget.min}
                                register={register}
                                label="Minimum amount"
                                name="budget.min"
                                currency={true}
                            />
                        </div>
                        <span className="divider"></span>
                        <div className="col-6 col-gap-10">
                            <Input
                                error={errors.budget && errors.budget.max}
                                register={register}
                                label="Maximum amount"
                                name="budget.max"
                                currency={true}
                            />
                        </div>
                    </div>
                </FormGroup>
                <FormGroup title="Equipment Needed">
                    <Input
                        error={errors.equipment && errors.equipment.type}
                        register={register}
                        label="Equipment Type"
                        name="equipment.type"
                    />
                    <div className="grid grid-gap-10">
                        <div className="col-6 col-gap-10">
                            <Input
                                error={errors.equipment && errors.equipment.weight}
                                register={register}
                                label="Weight (in lbs)"
                                name="equipment.weight"
                                type="number"
                            />
                        </div>
                        <div className="col-6 col-gap-10">
                            <Input
                                error={errors.equipment && errors.equipment.size}
                                register={register}
                                label="Size (in m)"
                                name="equipment.size"
                                type="number"
                            />
                        </div>
                    </div>
                </FormGroup>
                <FormFooter handleCancel={handleCancel} />
            </form>
        </>
    )
})

export default FormStep1;