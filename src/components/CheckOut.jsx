import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { useNavigate } from "react-router-dom";

export const CheckOut = () => {
    const navigate = useNavigate();

    const handleSneakerClick = () => {
        navigate(`/sneakersXu/`);
    };


    return (
        <Container className='ms-3 mt-3'>
            <Row>
                <Col className="row row-centered pos" xs={12} onClick={() => handleSneakerClick()} >
                    CheckOut
                </Col>


            </Row>

        </Container>
    );
};

export default CheckOut;