import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div>

<Navbar bg="secondary" variant="dark" className='mb-4'>
    <Container>
    <Navbar.Brand href="#home">Sabores</Navbar.Brand>
    <Nav className="me-auto">
      <Link className="nav-link" to="/carros">Carros</Link>
      <Link className="nav-link" to="/array">Array</Link>
      <Link className="nav-link" to="/objeto">Objeto</Link>
      <Link className="nav-link" to="/pagina1">Pagina1</Link>
      <Link className="nav-link" to="/contador">Contador</Link>
      <Link className="nav-link" to="/filmes/populares">FilmesPopulares</Link>
      <Link className="nav-link" to="/filmes/detalhes">FilmesDetalhes</Link>
    
    </Nav>
    </Container>
  </Navbar>

    </div>
  )
}

export default Menu