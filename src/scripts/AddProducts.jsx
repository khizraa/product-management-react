import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useTheme } from "./ThemeProvider";

function AddProducts() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const { theme } = useTheme();

  const AddDetails = async () => {
    await addDoc(collection(db, "products List"), {
      name,
      type,
      quantity: Number(quantity),
      price: Number(price),
    });
    alert("Product added successfully");
    setName("");
    setType("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className={`form-container ${theme === "light" ? "light-theme" : "dark-theme"}`}>
      <h2>Add New Product</h2>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product name"
      />
      <label>Type</label>
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Enter product type"
      />
      <label>Quantity</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Enter quantity"
      />
      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
      />
      <button onClick={AddDetails}>Submit</button>
    </div>
  );
}

export default AddProducts;
