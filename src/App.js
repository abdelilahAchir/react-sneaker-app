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
import Container from "react-bootstrap/esm/Container";
import Payment from "./components/Payment";


const App = () => {

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
        <Container >
          <Navbarr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sneakersXu" element={<Sneakers />} />
            <Route path="/sneakerDetails/:brand/:model" element={<SneakerDetails />} />
            <Route path="/cart" element={<Cart />} />


            <Route path="/checkout" element={<Payment />} />
          </Routes>
        </Container>
      </ShoeContext.Provider>
    </BrowserRouter>



  )

};

export default App;
