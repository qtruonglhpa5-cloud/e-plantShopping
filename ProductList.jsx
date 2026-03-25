import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    category: "Aromatic Plants",
    items: [
      { id: 1, name: "Lavender", price: 10, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Mint", price: 8, image: "https://via.placeholder.com/100" },
    ],
  },
  {
    category: "Medicinal Plants",
    items: [
      { id: 3, name: "Aloe Vera", price: 12, image: "https://via.placeholder.com/100" },
      { id: 4, name: "Tulsi", price: 9, image: "https://via.placeholder.com/100" },
    ],
  },
  {
    category: "Indoor Plants",
    items: [
      { id: 5, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Peace Lily", price: 18, image: "https://via.placeholder.com/100" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <h1>Our Plants</h1>

      {plants.map((section, index) => (
        <div key={index}>
          <h2>{section.category}</h2>

          {section.items.map((plant) => (
            <div key={plant.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
              
              {/* Thumbnail */}
              <img src={plant.image} alt={plant.name} />

              <h3>{plant.name}</h3>
              <p>${plant.price}</p>

              <button
                onClick={() => handleAdd(plant)}
                disabled={addedItems.includes(plant.id)}
              >
                {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
              </button>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
