import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import SneakerDetails from "./SneakerDetails";
import { Link, useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyC5jLQAezHjVaqaL1y3nfPOHXH6KFJ-0oU",
  authDomain: "snkrsxu.firebaseapp.com",
  databaseURL: "https://snkrsxu-default-rtdb.firebaseio.com/",
  projectId: "snkrsxu",
  storageBucket: "snkrsxu.appspot.com",
  messagingSenderId: "652819388919",
  appId: "1:652819388919:web:b77272440eb923c3ebf6f2",
  measurementId: "G-PTF4FMRF51"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const Sneakers = () => {
  const [sneakers, setSneakers] = useState([]);
  const [selectedSneaker, setSelectedSneaker] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection("snkrsxu").get();
      setSneakers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));  
    };
    fetchData();
  }, []);
  
  const handleSneakerClick = (sneaker) => {
    setSelectedSneaker(sneaker);
    navigate(`/sneakerDetails/${sneaker.brand}/${sneaker.model}`);
  };
  
  return (
    <>
      <Container className="mt-3">
        <Row>
          {sneakers.map((sneaker) => (
            <Col xs={12} className="row row-centered pos" key={sneaker.id}>
              <div className="row row-centered pos" onClick={() => handleSneakerClick(sneaker)}>
                {sneaker.images_urls.map((image, index) => (
                  <img key={index} src={image.name} alt={sneaker.brand} />
                ))}
              </div>
              <h2>{sneaker.brand} {sneaker.model}</h2>
              <h2>{sneaker.gender}</h2>
              <h3>{sneaker.price}</h3>
            </Col>
          ))}
        </Row>
      </Container>
      {selectedSneaker && <SneakerDetails sneaker={selectedSneaker} />}
    </>
  );
};

export { db };
