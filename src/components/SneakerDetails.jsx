import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ShoeContext } from '../context/ShoeContext'
import { useNavigate } from "react-router-dom";


export const SneakerDetails = (props) => {
  const { brand, model } = useParams();
  const [sneaker, setSneaker] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  //const [selectedColor, setSelectedColor] = useState(sneaker.colors[0])
  //const [item, setItem] = useState({});
  // const [sizes, setSizes] = useState([]);
  // const [shoeSize, setShoeSize] = useState('');
  //const { id } = useParams();
  //const itemsInCart = useContext(ShoeContext).itemsInCart;
  const setItemsInCart = useContext(ShoeContext).setItemsInCart;
  //const numInCart = useContext(ShoeContext).numInCart;
  const setNumInCart = useContext(ShoeContext).setNumInCart;

  useEffect(() => {
    const db = firebase.firestore();
    if (brand && model) {
      const fetchData = async () => {
        const snapshot = await db
          .collection("snkrsxu")
          .where("brand", "==", brand)
          .where("model", "==", model)
          .get();
        setSneaker({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() });
      };
      fetchData();
    }
  }, [brand, model]);

  const addToCart = (e) => {
    e.preventDefault();
    const currentProducts = JSON.parse(sessionStorage.getItem('itemsInCart')) || [];
    const newItem = { ...sneaker, quantity: 1 };
    setIsAdded(true);
    const existingItemIndex = currentProducts.findIndex(
      (product) => product.id === newItem.id
    );
    if (existingItemIndex !== -1) {
      currentProducts[existingItemIndex].quantity++;

    } else {
      currentProducts.push(newItem);
    }
    sessionStorage.setItem('itemsInCart', JSON.stringify(currentProducts));
    setItemsInCart(currentProducts);
    setNumInCart(currentProducts.reduce((total, product) => total + product.quantity, 0));
    navigate('/cart');
  };

  if (!sneaker) {
    return <div>Loading...</div>;
  }

  return (
    <Row className="row row-centered pos">
      <Breadcrumb className="mt-3" >
        <Breadcrumb.Item href="/sneakersXu">Sneakers</Breadcrumb.Item>
        <Breadcrumb.Item className=" mx-3" href="#" active >{sneaker.brand} {sneaker.model}</Breadcrumb.Item>
      </Breadcrumb>
      <h1>

        {sneaker.brand} {sneaker.model}
      </h1>
      <img src={sneaker.images_urls[0].name} alt={sneaker.brand} />
      <p className="mt-3">Price: {sneaker.price} $</p>
      <p>Sizes: {sneaker.sizes.map(size => (
        <Col className="btn  btn-light  mx-1" >{size.name}</Col>)
      )}
      </p>
      <p>Colors: {sneaker.colors.map(color => (
        <Col className="btn btn-light mx-1">{color.name}</Col>
      ))
      }</p>

      <Button className="mb-3" onClick={addToCart}>{isAdded ? 'Added' : 'Add to cart'}</Button>


    </Row>
  );
};

export default SneakerDetails;