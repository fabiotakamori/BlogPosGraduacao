import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar,Nitem } from "./components/Navbar";
import logoAdrenalina from "./img/Adrenalina.png";
import Noticia from "./pages/Noticia";
import Sobre from "./pages/Sobre";
import Footer from "./components/Footer";
function App() {
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
