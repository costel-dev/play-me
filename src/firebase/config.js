import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyDpvUDP0OJGEy9WMsuDutCnrvFdTJuVnxk',
  authDomain: 'play-me-list.firebaseapp.com',
  projectId: 'play-me-list',
  storageBucket: 'play-me-list.appspot.com',
  messagingSenderId: '497229928682',
  appId: '1:497229928682:web:dbcfee0f78651e9e3e1f93',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
