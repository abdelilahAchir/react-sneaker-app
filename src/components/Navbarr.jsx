import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping, } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import 'font-awesome/css/font-awesome.min.css'; 
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SingInButton";
import { SignOutButton } from "./SignOutButton";
//import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
export const Navbarr = (props) => {

  const isAuthenticated = useIsAuthenticated();

  return (
    <>
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="/" className=''>Snkrs X u</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

         
            <Nav.Link href="/sneakersXu">Shop</Nav.Link>
          
            <Nav.Link href="/">Contact uZ</Nav.Link>
            <Nav.Link href="/cart"><FontAwesomeIcon icon={faCartShopping}/></Nav.Link>
            {isAuthenticated ? <SignOutButton/> : <SignInButton/>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {props.children}

    </>
  );
};

export default (Navbarr);