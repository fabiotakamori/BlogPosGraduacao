import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar,Nitem } from "./components/Navbar";
import logoAdrenalina from "./img/Adrenalina.png";
import Noticia from "./pages/Noticia";
import Sobre from "./pages/Sobre";
import Footer from "./components/Footer";
function App() {
  /*https://celke.com.br/artigo/o-que-e-componente-no-react#:~:text=Componentes%20permitem%20você%20dividir%20a,Componentes%20são%20como%20funções%20JavaScript.*/
  return (
    <BrowserRouter>
      <Navbar logo={logoAdrenalina}>
          <Nitem title="Noticias" to="/"/>  
          <Nitem title="Sobre" to="/sobre"/> 
      </Navbar>
      <Routes>
          <Route path="/" element={<Noticia/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
      </Routes> 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

/*
0-Component react, oque é ?
permitem você dividir a UI em partes independentes, reutilizáveis,

1-Routes
ara navegar entre as páginas de uma aplicação React.JS precisaremos criar rotas, onde cada rota vai representar uma tela.
Para trabalhar com rotas no React vamos utilizar um pacote chamado React Router Dom que precisa ser instalado no nosso projeto. É ele que nos auxiliará na criação da navegação.
Instação
npx create-react-app react-rotas
routes.js importamos dois componentes do pacote do react-router-dom: BrowserRouter e Route.
BrowserRouter e Route
Esses dois componentes provêm e gerenciam as rotas dentro da nossa aplicação. Vamos aprender a função de cada um.
BrowserRouter: 
é um componente responsável por informar a nossa aplicação que teremos um roteamento de componentes, por conta disso ele ficará em volta dos componentes <Route>.
Route:
componente que associa a rota ao componente. Nele temos três parâmetros: component, path e exact. O parâmetro
*/