import React, { useState, useEffect, } from "react";
import "firebase/compat/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Navbarr } from './components/Navbarr'
import { Cart } from './components/Cart'
import { Sneakers } from "./components/Sneakers";
import { SneakerDetails } from './components/SneakerDetails'
import { Route, BrowserRouter, } from "react-router-dom";
import { Routes, } from "react-router";

import { ShoeContext } from './context/ShoeContext'
import { Home } from './components/Home'

const App = () => {
  // const [cart, setCart] = useState([]);
  // console.log(cart)

  // const addToCart = (sneaker) => {
  //   // Add the sneaker to the cart state
  //   setCart([...cart, sneaker]);
  //   console.log(cart.length)
  //   console.log(sneaker)
  //   console.log(cart)
  // };

  // const removeFromCart = (index) => {
  //   // Remove the sneaker from the cart state
  //   const newCart = [...cart];
  //   newCart.splice(index, 1);
  //   setCart(newCart);
  // };

  const [itemsInCart, setItemsInCart] = useState([]);
  //console.log(itemsInCart)
  const [numInCart, setNumInCart] = useState(0);

  // const [logged, setLogged] = useState("");
  // const [user, setUser] = useState("");

  const [shippingInfo, setShippingInfo] = useState({})


  useEffect(() => {
    const updateNumInCart = JSON.parse(sessionStorage.getItem('numInCart'));
    setNumInCart(updateNumInCart);

    const updateItemsInCart = JSON.parse(sessionStorage.getItem('itemsInCart'));
    setItemsInCart(updateItemsInCart);
  }, [numInCart])


  return (
    <BrowserRouter>
      <ShoeContext.Provider value={{ itemsInCart, setItemsInCart, numInCart, setNumInCart, shippingInfo, setShippingInfo }}>
        <div className="container">
          <Navbarr />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/sneakersXu" element={<Sneakers />} />
            <Route path="/sneakerDetails/:brand/:model" element={<SneakerDetails />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </div>
      </ShoeContext.Provider>
    </BrowserRouter>

  )

};

export default App;
