import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Trash2, Pencil } from "lucide-react";
import { updateItem } from "./EditProduct";
import {db} from "../../firebase"

import deleteItem from "./DeleteProduct";

function ProductList({ list }) {
  const { theme } = useTheme();
  const [editID, setEditID] = useState(null);
  const [editName, setEditName] = useState("")
  const [editPrice, setEditPrice] = useState(0);
const [editQty, setEditQty] = useState(0);

  // const [dropdownstate, setdropdownstate] = useState(false)
  function HandleEdit(id, name, quantity, price) {
    // updateItem(id);
    setEditID(id);
    setEditName(name)
    setEditQty(quantity)
    setEditPrice(price)
  }
  function HandleSave() {
    updateItem(editID, editName, editPrice, editQty)
    setEditID(null)
  }

  return (
    <>
      {list.length > 0 ? (
        <div className="product-grid">
          {list.map((item) => (
            <div
              key={item.id}
              className={`card ${
                theme === "light" ? "light-theme" : "dark-theme"
              }`}
            >
              {editID === item.id ? (
                <div className="card-header">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <input
                    type="number"
                    value={editQty}
                    onChange={(e) => setEditQty(e.target.value)}
                  />
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)

                    }
                  />
                  <button onClick={HandleSave}>save</button>
                </div>
              ) : (
                <div>
                  <div className="card-header">
                  <button onClick={() => deleteItem(item.id)}>
                      <Trash2 />
                    </button>
                    <button onClick={() => HandleEdit(item.id, item.name, item.quantity, item.price)}>
                      <Pencil />
                    </button>
                    <h2>{item.name}</h2>
                    
                  </div>
                  <p>{item.type}</p>
                  <p>${item.price}</p>
                  {item.quantity === 0 ? (
                    <p>Sold</p>
                  ) : (
                    <p>In Stock: {item.quantity}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No product uploaded</p>
      )}
    </>
  );
}

export default ProductList;
