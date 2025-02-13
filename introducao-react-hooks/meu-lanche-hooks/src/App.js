import logo from './logo.svg';
import './App.css';
import { EstilizacaoGlobalBody } from './styles-components/global/EstilizacaoGlobal';
import Header from './componentes/header/header.jsx';

function App() {
  return (
      <EstilizacaoGlobalBody>
        <Header/>
      </EstilizacaoGlobalBody>
  );
}

export default App;
