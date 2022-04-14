import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import Cartao from './components/Cartao';
import Box from './components/Box';
import Pagina1 from './pages/Pagina1';
import Carros from './pages/Carros';
import Array from './pages/Array';
import Objeto from './pages/Objeto';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Contador from './pages/Contador';
import FilmesPopulares from './pages/filmes/FilmesPopulares';
import FilmesDetalhes from './pages/filmes/FilmesDetalhes';
import FilmesLançamento from './pages/filmes/FilmesLançamento';
import DetalhesdoAtor from './pages/Atores/DetalhesdoAtor';
import FilmesCartaz from './pages/filmes/FilmesCartaz';


function App() {
  return (
    <div>
      
  <BrowserRouter>
    
    <Menu/>

    <Routes>
      <Route path="/" element={<Carros/>}/>
      <Route path="/carros" element={<Carros/>}/>
      <Route path="/array" element={<Array/>}/>
      <Route path="/objeto" element={<Objeto/>}/>
      <Route path="/pagina1" element={<Pagina1/>}/>
      <Route path="/contador" element={<Contador/>}/>
      <Route path="/filmes/populares" element={<FilmesPopulares/>}/>
      <Route path="/filmes/:id" element={<FilmesDetalhes/>}/>
      <Route path="/filmes/lancamento" element={<FilmesLançamento/>}/>
      <Route path="/filmes/cartaz" element={<FilmesCartaz/>}/>
      <Route path="/atores/:id" element={<DetalhesdoAtor/>}/>
      
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
