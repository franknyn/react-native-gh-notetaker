//const firebase = require('firebase');
import * as firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "dJvRBvQIeakIAylvCjmjiZd0mR6JOr4aREmHaD5T",
  authDomain: "notetaker-react-native.firebaseapp.com",
  databaseURL: "https://notetaker-react-native.firebaseio.com",
  storageBucket: "",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

var api = {
  getBio(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
/*
    return fetch(url).then((res) => 
      
      return (delay>0) ?new Promise((resolve, reject) => {
        setTimeout(() => resolve(res.json()),delay);
      }): res.json();
    });
*/
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json())
    /*
    return fetch(url).then((res) => {
      return (delay > 0)? new Promise((resolve, reject) => {
        setTimeout(() => resolve(res.json()),delay);
      }): res.json() ;
    });*/
  },
  getNotes(username){
    username = username.toLowerCase().trim();
    return firebaseApp.database().ref().child(username);
    //var url = `https://notetaker-react-native.firebaseio.com/${username}.json`;
    //return fetch(url).then((res) => res.json())
 /*  
    return fetch(url).then((res) => {
      var result= (delay > 0) ? new Promise((resolve, reject) => {
        setTimeout(() => resolve(res.json()),delay);
      }): res.json();


    });
*/

  },
  addNote(username, note) {
    username = username.toLowerCase().trim();
    var userRef = firebaseApp.database().ref().child(username);
    return userRef.push(note);  
      
/*
    var url = `https://notetaker-react-native.firebaseio.com/${username}.json`;

    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
*/

  }
};

export default api;

//module.exports = api;