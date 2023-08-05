import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [data, setData] = useState(0);
  const Products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 }
  ];
  const increment = () => {
    setData(data + 1);
  };
  const decrement = () => {
    setData(data - 1);
  };
  return (
    <div className="App">
      <div className="product">
        <h3> Product</h3>
        <p className="p">
          Product-1 100
          <button onClick={increment}>+ </button>
          <button onClick={decrement}>- </button>
        </p>
        <p className="p">
          Product-2 200
          <button onClick={increment}>+ </button>
          <button onClick={decrement}>- </button>
        </p>
        <p className="p">
          Product-3 300
          <button onClick={increment}> + </button>
          <button onClick={decrement}> - </button>
        </p>
      </div>
      <div className="cart">
        <h3> Cart</h3>
        <p className="p"></p>
      </div>
    </div>
  );
}
