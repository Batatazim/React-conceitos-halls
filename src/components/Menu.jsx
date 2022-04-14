import React from 'react'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
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
      <Link className="nav-link" to="/filmes/populares">Filmes Populares</Link>
      <Link className="nav-link" to="/filmes/lancamento">Filmes Lançamento</Link>
      <Link className="nav-link" to="/filmes/cartaz">Filmes Cartaz</Link>
    </Nav>
    </Container>
  </Navbar>

    </div>
  )
}

export default Menu