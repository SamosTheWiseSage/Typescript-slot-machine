import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyC5CZw5jbWHfK9kcb7L0ExQUvdoHuCpBos",
    authDomain: "gachaslotstorage.firebaseapp.com",
    databaseURL: "https://gachaslotstorage-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gachaslotstorage",
    storageBucket: "gachaslotstorage.firebasestorage.app",
    messagingSenderId: "575628586857",
    appId: "1:575628586857:web:0ba9bb7ea01e6b4a02d7f8"
};


const app = initializeApp(firebaseConfig);


const database = getDatabase(app);


export { database, ref, get };
