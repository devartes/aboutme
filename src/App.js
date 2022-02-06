import './App.css';
import SayMyName from "./components/SayMyName"
import Pessoa from "./components/Pessoa"
import Frase from "./components/Frase"

function App() {
  const nome = "Javascript"

  return (
    <div className="App">
      <h1>Testando...</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Ana" />
      <SayMyName nome="React" />
      <SayMyName nome={nome} />
      <Pessoa nome="Ana" idade="27" profissao="Desenvolvedora" foto="https://source.unsplash.com/random/200x95" />
    </div>
  );
}

export default App;