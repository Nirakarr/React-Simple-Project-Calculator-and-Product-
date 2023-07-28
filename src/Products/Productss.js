import "./Productss.css";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { shuffle } from "lodash"; // Import the shuffle function from Lodash or any other utility library
function Productss() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Function to handle the shuffle action
  const handleShuffle = () => {
    setProducts(shuffle(products));
  };

  return (
    <div>
      <h1>Welcome to E-commerce</h1>

      {/* Add the Shuffle button */}
      <Button variant="contained" onClick={handleShuffle}>
        Shuffle Products
      </Button>

      {products.map((product) => (
        <div className="screen" key={product.id}>
          <div className="left"></div>

          <div className="all">
            <div className="title">{product.title}</div>

            <div className="photo">
              <img src={product.image} alt="Product" />
            </div>

            <div className="author">Category: {product.category}</div>

            <div className="description">{product.description}</div>

            <div className="read">
              <Button variant="contained">More Details</Button>
            </div>
          </div>

          <div className="right"></div>
        </div>
      ))}
    </div>
  );
}

export default Productss;
