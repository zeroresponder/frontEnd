import { USER_STATE_CHANGE } from "../constants";
import { useDispatch } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export const userAuthStateListener = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(getCurrentUserData());
    } else {
      dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true });
    }
  });
};

export const getCurrentUserData = () => (dispatch) => {
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .onSnapshot((res) => {
      if (res.exists) {
        return dispatch({
          type: USER_STATE_CHANGE,
          currentUser: res.data(),
          loaded: true,
        });
      }
    });
};
export const register = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("OPLEASEEEEEEEEE");
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });

export const login = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });

//const exampleMedData = {
//   "age": 15,
//   "sex": 1,
//   "chol": 216,
//    "fbs": 1,
//   "hadECG": false,
// }
//
// const comfortable_responses = ['cpr', 'drowning', 'first-aid']
export const createUserData =
  (medical_data, comfortable_responses) => (dispatch) =>
    new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .update({
          medical_data: medical_data,
          comfortable_responses: comfortable_responses,
        })
        .then(() => {
          resolve();
        })
        .catch((error) => {
          console.log("TANUJ FUCKED UP" + error);
          reject();
        });
    });

export const setFormCompleted = () => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      surveyTaken: true,
    });
};
export const goToSettings = () => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      surveyTaken: false,
    });
};

export const setFirstPageData = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        basicData: data,
      });
  });

export const setSecondPageData = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        ecgData: data,
      });
  });

export const setThirdPageData = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        comfortableResponses: data,
      });
  });
