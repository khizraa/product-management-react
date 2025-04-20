import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

const deleteItem = async (id) => {
  await deleteDoc(doc(db, "products List", id));
};

export default deleteItem;
