import axios from 'axios';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// https://[PROJECT_ID].firebaseio.com/message_list.json

axios.defaults.baseURL =
  'https://bc11-7c3e8-default-rtdb.firebaseio.com/';

export const addTodoApi = (todo) => {
  return axios
    .post('/todos.json', todo)
    .then(({ data }) => ({ ...todo, id: data.name }))
    .catch((err) => {
      throw err;
    });
};

export const getTodosApi = () => {
  return axios
    .get('/todos.json')
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const removeTodoApi = (id) => {
  return axios
    .delete('/todos/' + id + '.json') // null
    .then(() => id) // data = null
    .catch((err) => {
      throw err;
    });
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_API_KEY}`,
//   // apiKey: `${process.env.FIREBASE_SECURE}`,
//   authDomain: 'bc11-4527e.firebaseapp.com',
//   projectId: 'bc11-4527e',
//   storageBucket: 'bc11-4527e.appspot.com',
//   messagingSenderId: '949579986113',
//   appId: '1:949579986113:web:fe74c795b6a872471c5040',
//   measurementId: 'G-SV00XP4M7W',
// };

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: 'authorization-1ffb1.firebaseapp.com',
  projectId: 'authorization-1ffb1',
  storageBucket: 'authorization-1ffb1.appspot.com',
  messagingSenderId: '763650332185',
  appId: '1:763650332185:web:aa00aa1a1cd3086dabbc88',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export const firebase = {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
