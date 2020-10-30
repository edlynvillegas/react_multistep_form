import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// Components
import FormGroup from '../../reusable/form-group/FormGroup'
import Select from '../../reusable/select/Select'
import FormFooter from '../../reusable/form-footer/FormFooter'
import FormHeader from '../../reusable/form-header/FormHeader'
// Context
import { UIContext } from '../../../context/UIContext'

const FormStep3 = React.memo(() => {
    const { activeStep, setActiveStep,
        formData, setFormData,
        setFormSteps, setSubmitted,
        monthOptions, dayOptions, ACTIVE_ACTIONS } = useContext(UIContext);

    const thirdSchema = yup.object().shape({
        start_date: yup.object().shape({
            month: yup.string().required(),
            day: yup.number().required(),
            year: yup.string().required()
        }).test('startDate',
        'Please select future date', 
        value => {
            const DATE = new Date()
            const today = new Date(`${DATE.getMonth()+1} ${DATE.getDate()} ${DATE.getFullYear()}`).getTime()
            const st = new Date(`${value.month} ${value.day} ${value.year}`).getTime()
            if (st >= today) return true;
            else return false;
        }),
        end_date: yup.object().shape({
            month: yup.string().required(),
            day: yup.number().required(),
            year: yup.string().required()
        }).test('endDate',
        'Please select future date', 
        function(value) {
            const DATE = new Date()
            const ST_DATE = this.parent.start_date
            const today = new Date(`${DATE.getMonth()+1} ${DATE.getDate()} ${DATE.getFullYear()}`).getTime()
            const st = new Date(`${ST_DATE.month} ${ST_DATE.day} ${ST_DATE.year}`).getTime()
            const et = new Date(`${value.month} ${value.day} ${value.year}`).getTime()
            if (et >= today && et >= st) return true;
            else return false;
        })
    });
    
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(thirdSchema),
        defaultValues: formData
    });

    useEffect(() => {
        setFormSteps({ step: activeStep-1, types: { visited: true } })
        // eslint-disable-next-line
    }, [])

    const handleNext = (data) => {
        setFormData(prev => ({...prev, ...data}))
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
            <form onSubmit={handleSubmit(handleNext)} noValidate>
                <FormGroup title="Start Date">
                    <div className="grid grid-gap-10">
                        <div className="col-4 col-gap-10">
                            <Select
                                error={errors.start_date && errors.start_date.month}
                                register={register}
                                label="Month"
                                name="start_date.month"
                                options={monthOptions}
                            />
                        </div>
                        <div className="col-4 col-gap-10">
                            <Select
                                error={errors.start_date && errors.start_date.day}
                                register={register}
                                label="Day"
                                name="start_date.day"
                                options={dayOptions()}
                            />
                        </div>
                        <div className="col-4 col-gap-10">
                            <Select
                                error={errors.start_date && errors.start_date.year}
                                register={register}
                                label="Year"
                                name="start_date.year"
                                options={['2020', '2021']}
                            />
                        </div>
                    </div>
                    {
                        errors.start_date ?
                        <span className="input-error">{errors.start_date.message}</span> :
                        null
                    }
                </FormGroup>
                <FormGroup title="End Date">
                    <div className="grid grid-gap-10">
                        <div className="col-4 col-gap-10">
                            <Select
                                error={errors.end_date && errors.end_date.month}
                                register={register}
                                label="Month"
                                name="end_date.month"
                                options={monthOptions}
                            />
                        </div>
                        <div className="col-4 col-gap-10">
                            <Select
                                error={errors.end_date && errors.end_date.day}
                                register={register}
                                label="Day"
                                name="end_date.day"
                                options={dayOptions()}
                            />
                        </div>
                        <div className="col-4 col-gap-10">
                            <Select
                                error={errors.end_date && errors.end_date.year}
                                register={register}
                                label="Year"
                                name="end_date.year"
                                options={['2020', '2021']}
                            />
                        </div>
                    </div>
                    {
                        errors.end_date ?
                        <span className="input-error">{errors.end_date.message}</span> :
                        null
                    }
                </FormGroup>
                <FormFooter handleSaveDraft={handleSaveDraft} handleCancel={handleCancel} />
            </form>
        </>
    )
})

export default FormStep3;