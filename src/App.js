// Components
import Main from './pages/main/Main'
import './global.scss';
// Provider
import UIProvider from './context/UIContext'

function App() {
  return (
    <UIProvider>
      <Main />
    </UIProvider>
  );
}

export default App;
