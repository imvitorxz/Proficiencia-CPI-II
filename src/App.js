import './App.css';

import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

import MainForm from './Components/Forms/MainForm';

function App() {
  document.title = "Formulário de Cadastro - Proficência CPI II";
  return (
    <div className="App">
      <Header/>
      <MainForm/>
      <showData/>
      <Footer/>
    </div>
  );
}

export default App;
