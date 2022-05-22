import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
}

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