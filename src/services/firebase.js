import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import firebaseConfig from '../../config'

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const eventCollection = collection(db, 'events');

const getEvents = async () => {
  const eventSnapshot = await getDocs(eventCollection);
  const eventList = eventSnapshot.docs.map(doc => doc.data());
  return eventList;
}

const getEvent = async (id) => {
  const eventSnapshot = await getDocs(eventCollection);
  const eventList = eventSnapshot.docs.map(doc => doc.data());
  const event = eventList.find(event => event.id == id)
  return event;
}

const postEvent = (event) => {
  addDoc(eventCollection, event)
}

export default {
  getEvents,
  getEvent,
  postEvent
} 