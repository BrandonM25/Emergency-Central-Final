import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB5z86qWX7dLZ__dnir0G6zT8ib_-lGGII",
    authDomain: "emergency-central.firebaseapp.com",
    databaseURL: "https://emergency-central.firebaseio.com",
    projectId: "emergency-central",
    storageBucket: "emergency-central.appspot.com",
    messagingSenderId: "583800565638"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};