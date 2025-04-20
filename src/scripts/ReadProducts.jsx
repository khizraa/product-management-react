import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import DeleteProduct from "./DeleteProduct";

function ReadProducts() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const itemsArray = onSnapshot(collection(db, "products List"),(snapshot) =>{setList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))})
    
  return()=>itemsArray()
    }, []);
  return(<>
  <ProductList list={list}/>
  </>)
  
}



export default ReadProducts;
