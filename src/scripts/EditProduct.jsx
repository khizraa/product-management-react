import { useState } from "react";
import { collection, doc , updateDoc } from "firebase/firestore";
import {db} from "../../firebase"

export const updateItem = async(id, newName, newPrice, newQuantity)=>{

    await updateDoc(doc(db, "products List", id), {
        name:newName,
        price:newPrice,
        quantity:newQuantity
    })
}

