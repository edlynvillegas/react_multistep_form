import React from 'react';
import './main.css';
// Components
import Form from '../../components/form/form'
import FormStepper from '../../components/form-stepper/FormStepper'

const Main = React.memo(() => (
    <main>
          <div className="main-container">
              <h1>Create a Load</h1>
              <p>A <strong>load</strong> is a shipment you wish to have delivered by carriers.</p>
              <div className="form-container">
                <FormStepper />
                <Form />
              </div>
          </div>
      </main>
))

export default Main;