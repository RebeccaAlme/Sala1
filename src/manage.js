import {
    collection, 
    getDocs,
    query,
    addDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const itemsCollection = collection(db,'agenda');

export const createItem = (obj) => {
    return addDoc (itemsCollection, obj) .id
}