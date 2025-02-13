import logo from './fotoLucas.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem vindo ao meu Portfolio!!!</h1>
        <p>Lucas da Costa</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Analista em Tecnologia da Informação
        </p>
        <p>A minha idade de: {sum(15, 15)}</p>
        <a
          className="App-link"
          href="https://github.com/lucascostadevrobot"
          target="_blank"
          rel="noopener noreferrer"
        >
         Bora descobrir mais sobre mim
        </a>
      </header>
    </div>
  );
}

function sum(a, b){
  return a+b;
}

export default App;
