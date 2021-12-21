import React, { useState } from "react";
import { Container, Toast } from "react-bootstrap";

import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Items from "./components/item/Items";
import pre from "./images/image-product-1.jpg";
import pre2 from "./images/image-product-2.jpg";
import pre3 from "./images/image-product-3.jpg";
import pre4 from "./images/image-product-4.jpg";

function App() {
  const [showA, setShowA] = useState(false);
  const num = 0;
  const [cart, setCart] = useState([]);
  const data = [`${pre}`, `${pre2}`, `${pre3}`, `${pre4}`];
  const [i, setI] = useState(0);
  const [numItems, setNumItems] = useState(num);
  const removeCart = (el) => {
    cart.splice(el, el + 1);
    let cartArray = [...cart];
    setCart((cart) => [...cartArray]);
  };
  const addToCart = () => {
    let cartArray = { id: i, img_url: data[i], count: numItems };
    setCart((cart) => [...cart, cartArray]);
  };

  const toggleShowA = () => setShowA(!showA);
  return (
    <Container>
      <div className="App w-100">
        <Header showA={showA} toggleShowA={toggleShowA} cart={cart} />
        <Hero
          showA={showA}
          toggleShowA={toggleShowA}
          cart={cart}
          addToCart={addToCart}
          i={i}
          setI={setI}
          setCart={setCart}
          numItems={numItems}
          setNumItems={setNumItems}
        />
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">Cart</strong>
          </Toast.Header>
          <Toast.Body>
            <Items cart={cart} removeCart={removeCart} />
          </Toast.Body>
        </Toast>
      </div>
    </Container>
  );
}

export default App;
