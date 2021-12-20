import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Equipe from './paginas/equipe/Equipe';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Feed from './paginas/feed/Feed';
import SideBar from './components/estaticos/sideBar/SideBar';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastropost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Perfil from './paginas/perfil/Perfil';
import ListaPostagemUser from './components/postagens/listaPostagemUser/ListaPostagemUser';
import MeusPosts from './paginas/meusPosts/MeusPosts';
import Saude from './paginas/saude/Saude';
import Educacao from './paginas/educacao/Educacao';
import Saneamento from './paginas/saneamento/Saneamento';
import Seguranca from './paginas/seguranca/Seguranca';
import Mobilidade from './paginas/mobilidade/Mobilidade';
import SobreNos from './paginas/sobrenos/SobreNos';

function App() {
  
  return (
    <>
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch >
          
          <Route exact path='/' >
            <Home/>
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>

          <Route path='/equipe'>
            <Equipe />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/cadastroUsuario'>
            <CadastroUsuario />
          </Route>

          <Route path='/posts'>
            <ListaPostagem />
          </Route>

          <Route path='/temas'>
            <ListaTema />
          </Route>

          <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>

          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>

          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>

          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>

          <Route exact path='/deletarTema/:id'>
            <DeletarTema />
          </Route>

          <Route exact path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>

          <Route exact path='/listaPostagem'>
            <ListaPostagem />
          </Route>

          <Route path='/feed'>
            <Feed />
          </Route>

          <Route path='/perfil'>
            <Perfil />
          </Route>

          <Route exact path='/listaPostagemUser'>
            <ListaPostagemUser />
          </Route>

          <Route path='/meusPosts'>
            <MeusPosts />
          </Route>

          <Route path='/temaSaude'>
            <Saude />
          </Route>

          <Route path='/temaEducacao'>
            <Educacao />
          </Route>

          <Route path='/temaSaneamento'>
            <Saneamento />
          </Route>

          <Route path='/temaSeguranca'>
            <Seguranca />
          </Route>

          <Route path='/temaMobilidade'>
            <Mobilidade />
          </Route>

          <Route path='/sobreNos'>
            <SobreNos/>
          </Route>

        </Switch>
        <Footer />
      </Router >
      </Provider>
    </>
  );
}

export default App;
