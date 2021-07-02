import logo from '../logo.svg';
import CarWidget from './CarWidget'

import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{'Tienda React'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Nosotros</Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Categoria 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Categoria 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Categoria 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Categoria 4</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <CarWidget />



      </Navbar.Collapse>
    </Navbar>
  );
}
