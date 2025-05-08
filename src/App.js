import './App.css';

import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

import ExibirCadastro from './Components/Buttons/ExibirCadastro';
import MainForm from './Components/Forms/MainForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainForm/>
      <ExibirCadastro/>
      <Footer/>
    </div>
  );
}

export default App;
