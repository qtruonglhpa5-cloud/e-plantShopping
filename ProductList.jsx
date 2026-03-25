import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  { id: 1, name: "Lavender", price: 10, category: "Aromatic" },
  { id: 2, name: "Mint", price: 8, category: "Aromatic" },
  { id: 3, name: "Aloe Vera", price: 12, category: "Medicinal" },
  { id: 4, name: "Tulsi", price: 9, category: "Medicinal" },
  { id: 5, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 6, name: "Peace Lily", price: 18, category: "Indoor" },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Plants</h1>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addToCart(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;