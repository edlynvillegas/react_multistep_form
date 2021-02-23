// Components
import Main from './pages/main/Main'
import './global.scss';
// Provider
import UIProvider from './context/UIContext'

function App() {
  console.log('->', process.env.REACT_APP_API_BASE_URL)
  return (
    <UIProvider>
      <Main />
    </UIProvider>
  );
}

export default App;
