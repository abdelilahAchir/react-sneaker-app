import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import {  useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleSneakerClick = () => {
    navigate(`/sneakersXu/`);
  };


  return (
    <Container className='ms-3 mt-3'>
      <Row>
        <Col className="row row-centered pos" xs={12} onClick={() => handleSneakerClick()} >
      <img  src="https://pyxis.nymag.com/v1/imgs/ef7/29a/6858a571d8fa984bf2d02cc0c0e68d96aa-02-white-sneakers-lede.2x.rsocial.w600.jpg" alt="" />
        </Col>
        <Col className="row row-centered pos" xs={12}  onClick={() => handleSneakerClick()}>     
         <img src="https://pyxis.nymag.com/v1/imgs/ef7/29a/6858a571d8fa984bf2d02cc0c0e68d96aa-02-white-sneakers-lede.2x.rsocial.w600.jpg" alt="" />

        </Col>
     
      </Row>
      
    </Container>
  );
};

export default Home;