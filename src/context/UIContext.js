import React, { createContext, useState, useReducer, useEffect } from 'react'
// SVGs
import { ReactComponent as BoxSVG } from '../assets/icons/box.svg'
import { ReactComponent as TruckSVG } from '../assets/icons/truck.svg'
import { ReactComponent as ScheduleSVG } from '../assets/icons/schedule.svg'

export const UIContext = createContext();

const DATE = new Date();
const dayOptions = () => {
    let days = [];
    for (let index = 1; index <= 30; index++) {
        days.push(index)
    }
    return days;
}
const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const initialState = {
    description: '',
    budget: {
        min: 0,
        max: 0
    },
    equipment: {
        type: '',
        weight: 0,
        size: 0
    },
    pickup: {
        address: '',
        city: '',
        barangay: ''
    },
    delivery: {
        address: '',
        city: '',
        barangay: ''
    },
    start_date: {
        month: monthOptions[DATE.getMonth()],
        day: DATE.getDate(),
        year: DATE.getFullYear()
    },
    end_date: {
        month: monthOptions[DATE.getMonth()],
        day: DATE.getDate(),
        year: DATE.getFullYear()
    }
}

const initialFormSteps = [
    {
        step: 1,
        title: 'Fill out load details',
        icon: <BoxSVG />,
        valid: false,
        visited: false
    },
    {
        step: 2,
        title: 'Indicate pickup and delivery',
        icon: <TruckSVG />,
        valid: false,
        visited: false
    },
    {
        step: 3,
        title: 'Set schedule',
        icon: <ScheduleSVG />,
        valid: false,
        visited: false
    }
]
const ACTIVE_ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

const activeReducer = (state, action) => {
    const limit = initialFormSteps.length
    switch (action.type) {
        case ACTIVE_ACTIONS.INCREMENT:
            if (state < limit) return state += 1
            else return state   
        case ACTIVE_ACTIONS.DECREMENT:
            if (state > 1) return state -= 1
            else return state
        default:
            return state
    }
}

const stepReducer = (state, action) => {
    let arr = [...state]
    arr[action.step] = {...arr[action.step], ...action.types}
    return arr
}

const UIProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useReducer(activeReducer, 1)
    const [formSteps, setFormSteps] = useReducer(stepReducer, initialFormSteps)
    const [formData, setFormData] = useState(initialState)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        if(submitted) console.log('FORM DATA:', formData)
        // eslint-disable-next-line
    }, [submitted])

    return (
        <UIContext.Provider value={{
            activeStep, setActiveStep,
            formData, setFormData,
            formSteps, setFormSteps,
            submitted, setSubmitted,
            monthOptions, dayOptions,
            ACTIVE_ACTIONS}}>
            {children}
        </UIContext.Provider>
    )
}

export default React.memo(UIProvider);