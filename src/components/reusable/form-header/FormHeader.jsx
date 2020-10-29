import React, { useContext } from 'react'
import './form-header.scss'
// Context
import { UIContext } from '../../../context/UIContext'
// SVGs
import { ReactComponent as ArrowLeftSVG } from '../../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRightSVG } from '../../../assets/icons/arrow-right.svg'

const FormHeader = React.memo(({ title }) => {
    const { activeStep, setActiveStep, formSteps, ACTIVE_ACTIONS } = useContext(UIContext)
    const arrowRight = activeStep < formSteps.length && formSteps[activeStep].visited
    const arrowLeft = activeStep > 1 && formSteps[activeStep-2].visited

    const handleNext = () => {
        setActiveStep({ type: ACTIVE_ACTIONS.INCREMENT })
    }
    const handlePrev = () => {
        setActiveStep({ type: ACTIVE_ACTIONS.DECREMENT })
    }

    return (
        <div className="form-header">
            <h3>{title}</h3>
            {
                arrowRight || arrowLeft ?
                <div className="form-step-arrows">
                    <button disabled={!arrowLeft} onClick={() => handlePrev()}><ArrowLeftSVG /></button>
                    <button disabled={!arrowRight} onClick={() => handleNext()}><ArrowRightSVG /></button>
                    {/* { arrowLeft ? <button><ArrowLeftSVG /></button> : null }
                    { arrowRight ? <button><ArrowRightSVG /></button> : null } */}
                </div> :
                null
            }
        </div>
    )
})

export default FormHeader;