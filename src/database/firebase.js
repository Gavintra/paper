import firebase from 'firebase';
//import "firebase/firestore";

//import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';


const firebaseConfig = {
    /*apiKey: "AIzaSyAfne-MdN3Eg3QVPjGYePQktsYWFRtD9fg",
    authDomain: "paper-72a5d.firebaseapp.com",
    databaseURL: "https://paper-72a5d.firebaseio.com",
    projectId: "paper-72a5d",
    storageBucket: "paper-72a5d.appspot.com",
    messagingSenderId: "248149821955",
    appId: "1:248149821955:web:686779d42a91e93dcf9c36"*/
    apiKey: "AIzaSyA-GEtxQqPA2_rvVnencEHA_lEhsYKG7RQ",
    authDomain: "paper-4ccdd.firebaseapp.com",
    databaseURL: "https://paper-4ccdd.firebaseio.com",
    projectId: "paper-4ccdd",
    storageBucket: "paper-4ccdd.appspot.com",
    messagingSenderId: "307305310971",
    appId: "1:307305310971:web:c3961793b2207f24dfde5e"
  };

  const firebaseDb = firebase.initializeApp(firebaseConfig);
  //const fireDb = firebaseDb.database().ref();
  //const storageDb = firebase.storage();

  //export {storageDb,fireDb as default};
  
  //export default firebaseDb.database().ref();
  export default firebaseDb;
  