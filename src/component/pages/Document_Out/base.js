import firebaseB from 'firebase'
import 'firebase/storage'

const dataStorage = {
  apiKey: "AIzaSyAfne-MdN3Eg3QVPjGYePQktsYWFRtD9fg",
    authDomain: "paper-72a5d.firebaseapp.com",
    databaseURL: "https://paper-72a5d.firebaseio.com",
    projectId: "paper-72a5d",
    storageBucket: "paper-72a5d.appspot.com",
    messagingSenderId: "248149821955",
    appId: "1:248149821955:web:686779d42a91e93dcf9c36"
};
export const appStorage = firebaseB.initializeApp(dataStorage);