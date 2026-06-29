import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarProdutos from './components/produtos/deletarProdutos/DeletarProdutos';
import CadastroProdutos from './components/produtos/cadastroProdutos/CadastroProdutos';
import store from './store/Store';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Contato from './paginas/contato/Contato';
import Perfil from './components/perfil/Perfil';

function App() {
  return (

    <Provider store={store}> 
      <ToastContainer />
    <BrowserRouter>
      
        <Navbar />

        <div style={{minHeight: '100vh'}}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrar" element={<CadastroUsuario />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/produtos/:id" element={<ListaProdutos />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/categorias/:id" element={<ListaCategoria />} />
            <Route path="/perfil" element=  {<Perfil />} />
            <Route path="/formularioCategoria" element={<CadastroCategoria />} />
            <Route path="/atualizarProduto" element={<CadastroProdutos />} />
            <Route path="/deletarProduto/:id" element={<DeletarProdutos/>} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>} />
            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
            <Route path="/atualizarProduto/:id" element={<CadastroProdutos />} />  
            <Route path="/sobre/:id" element={<Sobre />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato/>} />
          </Routes>
        </div>
        
        <Footer />
      
    </BrowserRouter>
    </Provider>
  );
}
export default App;
