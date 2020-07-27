import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apikey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucked: '',
    messageSenderId: '',
    apiId: '',

})

export {firebaseConfig as firebase}