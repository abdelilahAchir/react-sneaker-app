import React, { useContext, useState, useEffect } from "react";
//import { CartContext } from './CartContext';
import ShoeContext from "../context/ShoeContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import {
  XMarkIcon,
} from "@heroicons/react/20/solid";
export const Cart = (props) => {
  const [subtotal, setSubtotal] = useState(0);
  //const [taxes, setTaxes] = useState(0);
  // const [total, setTotal] = useState(0);
  // const products = useContext(ShoeContext).itemsInCart;
  const numInCart = useContext(ShoeContext).numInCart;
  const setNumInCart = useContext(ShoeContext).setNumInCart;
  const itemsInCart = useContext(ShoeContext).itemsInCart;
  const setItemsInCart = useContext(ShoeContext).setItemsInCart;
  //const [animate] = useAutoAnimate();
  // const [shoeQuantity, setShoeQuantity] = useState('');

  //const quantity = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem("itemsInCart"));
    updateCartTotal(cart);
  });

  const updateCartTotal = (arr) => {
    let sum = 0;
    for (let item in itemsInCart) {
      sum += arr[item].price * arr[item].quantity;
    }
    setSubtotal(sum.toFixed(2));

    //   const taxEstimate = sum * 0.05;
    //   setTaxes(taxEstimate.toFixed(2));

    //   const tempTotal = sum + taxEstimate + 5
    //   setTotal(tempTotal.toFixed(2));
  };
  const removeFromCart = (e, id) => {
    e.preventDefault();
    console.log(id);
    console.log(itemsInCart);
    console.log(itemsInCart[id].quantity);
    const quantity = itemsInCart[id].quantity;
    itemsInCart.splice(id, 1);
    setItemsInCart([...itemsInCart]);
    sessionStorage.setItem("itemsInCart", JSON.stringify([...itemsInCart]));
    sessionStorage.setItem("numInCart", numInCart - quantity);
    setNumInCart(numInCart - quantity);
    updateCartTotal(itemsInCart);
  };
  ///const { cart, removeFromCart } = useContext(CartContext);
  return (
    <Container>
      {itemsInCart.length === 0 ? (
        <h2 className="text-center mt-5">Shopping cart empty</h2>
      ) : (
        <Row>
          <Col>
            <h2 className="text-center mt-3 mb-5">Shopping Cart</h2>
            <ul>
              <Col className="row row-centered pos">
                {itemsInCart.map((item, id) => (
                  <div className="row row-centered pos " key={item.id}>
                    <img
                      className="mt-3 mb-3"
                      src={item.images_urls[0].name}
                      alt=""
                    />
                    <h1>Brand: {item.brand} </h1>
                    <h3>model: {item.model}</h3>
                    <h3>Gender: {item.gender}</h3>
                    <h4>Quantity: {item.quantity}</h4>
                    <h4>Price : {item.price} $</h4>
                    <div>
                      <Button
                        variant="danger"
                        onClick={(e) => removeFromCart(e, id)}
                      >
                        <span>Remove</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                ))}
              </Col>
              <h1> Subtotal: {subtotal} $</h1>
            </ul>
          </Col>
          <Button className="mb-5 mt-3 mx-2" onClick={() => updateCartTotal()}>
            Check out
          </Button>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
