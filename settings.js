/*
 * Created Date: Friday, 5th February 2021, 1:06:30 am
 * Author: Kingsley Chimezie
 */


/* FIREBASE CONFIG
-------------------------------- */
// PASTE YOUR WEB APP FIREBASE CONFIG HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLYq5_RphAfVoZBMT79nndrToesizi960",
  authDomain: "ourfirstyear-bc4f7.firebaseapp.com",
  projectId: "ourfirstyear-bc4f7",
  storageBucket: "ourfirstyear-bc4f7.appspot.com",
  messagingSenderId: "471586419988",
  appId: "1:471586419988:web:869cf22e48a5eaa6757e01",
  measurementId: "G-T8JB9MKXDY"
};


/* CLOUD FIRESTORE CONFIG
-------------------------------- */
const firestore = {
    collectionName: 'OurFirstYear',
    docID: 'test'
};
var random = Math.floor(Math.random() * 6);
var yes1='';
switch (random) {
  case 1:
    yes1 = 'https://media.giphy.com/media/fTmRLmuQ2BIzXlujyY/giphy.gif';
    break;
  case 2:
    yes1 = 'https://media.giphy.com/media/IMznbyWhsTEoE/giphy.gif';
    break;
  case 3:
    yes1 = 'https://media.giphy.com/media/lovdQqvIKNVTPgLuuT/giphy.gif';
    break;
   case 4:
    yes1 = 'https://media.giphy.com/media/7JXNUbamtaFzy/giphy.gif';
    break;
    case 5:
    yes1 = 'https://media.giphy.com/media/o2PzT5LZzztfO/giphy.gif';
    break;
  default:
    yes1 = 'https://media.giphy.com/media/12cn5ERxgFV9KM/giphy.gif';
}

/* UI DATA
-------------------------------- */
const uiData = {
    valentinesFirstName: 'Lori Konkol, My Sweet',
    valentinesLastName: 'Wife',
    headerMessage: 'Its almost one year! Would you say I Do again? 🌹',
    resultHeaderYes: 'You said yes! 🏓<br>😍💚💜💚💕💜💚💜😘',
    resultHeaderNo: 'You said no 😢',
    yesImgLink: yes1,
    noImgLink: 'https://media.giphy.com/media/wIhfELB4LvDhe/giphy.gif',
    lastAnswerHeading: 'Last answered:',
};
