import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import 'font-awesome/css/font-awesome.min.css';
import { SignInButton } from "./SingInButton";
import { SignOutButton } from "./SignOutButton";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { ProfileContent } from "./ProfileContent";
import ShoeContext from "../context/ShoeContext";
import { useContext } from "react";



export const Navbarr = (props) => {

  const itemsInCart = useContext(ShoeContext).itemsInCart;


  return (
    <>
      <Container >
        <Navbar bg="success" expand="lg">
          <Container>
            <Navbar.Brand href="/" className=''>Snkrs X u</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/sneakersXu">Shop</Nav.Link>
                <Nav.Link href="/">Contact uZ</Nav.Link>
                <Nav.Link href="/cart"><FontAwesomeIcon icon={faCartShopping} /> {itemsInCart.length > 0 ? itemsInCart.length : ''}</Nav.Link>
              </Nav>
              <UnauthenticatedTemplate>
                <SignInButton />
              </UnauthenticatedTemplate>
              <AuthenticatedTemplate>
                <ProfileContent />
                <SignOutButton />
              </AuthenticatedTemplate>
            </Navbar.Collapse>
          </Container>

        </Navbar>
        {props.children}
      </Container>
    </>
  );
};

export default (Navbarr);