// Components
import Form from './components/form/form'
import FormStepper from './components/form-stepper/FormStepper'
import './global.scss';
// Provider
import UIProvider from './context/UIContext'

function App() {
  return (
    <UIProvider>
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
    </UIProvider>
  );
}

export default App;
