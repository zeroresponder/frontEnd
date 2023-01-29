import { USER_STATE_CHANGE } from "../constants";
import { useDispatch } from "react-redux";
import { Platform, Text, View, StyleSheet } from "react-native";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Device from "expo-device";
import * as Location from "expo-location";
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
        console.log(firebase.auth().currentUser);
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

export const setPainTypeDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      painType: data,
    });
};
export const setHeartRateDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      maxHeartRate: data,
    });
};
export const setEcgResultDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      ECGResult: data,
    });
};
export const setEcgDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      Chestpain: data,
    });
};
export const setFBSDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      fastingBloodSugar: data,
    });
};
export const setCholDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      chol: data,
    });
};
export const setSexDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      sex: data,
    });
};
export const setAgeDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      age: data,
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

export const setResponseWilling = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      willingToRespond: data,
    });
};

export const startEmergency = (location) => {
  console.log("SStarting emergency");
  firebase
    .firestore()
    .collection("emergencies")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((snapshot) => {
      if (!snapshot.exists) {
        console.log("YESSS");
        firebase
          .firestore()
          .collection("emergencies")
          .doc(firebase.auth().currentUser.uid)
          .set({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          })
          .catch((e) => console.log(e));
      }
    });
};
export const setEmergencyAgeDB = (data) => {
  console.log("SETTING NEW AGE FOR EMERGENCY");

  firebase
    .firestore()
    .collection("emergencies")
    .doc(firebase.auth().currentUser.uid)
    .update({
      age: data,
    })
    .catch((e) => console.log(e));
};
export const setEmergencyCholDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("emergencies")
    .doc(firebase.auth().currentUser.uid)
    .update({
      chol: data,
    });
};
export const setEmergencyFBSDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("emergencies")
    .doc(firebase.auth().currentUser.uid)
    .update({
      fastingBloodSugar: data,
    });
};

export const setEmergencyECGDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("emergencies")
    .doc(firebase.auth().currentUser.uid)
    .update({
      chestPain: data,
    });
};

export const setEmergencySexDB = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("emergencies")
    .doc(firebase.auth().currentUser.uid)
    .update({
      sex: data,
    });
};
export const setEmergencyType = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("emergencies")
    .doc(firebase.auth().currentUser.uid)
    .update({
      emergencyType: data,
    });
};
export const setVictimState = (data) => {
  console.log(firebase.auth().currentUser.uid);
  firebase
    .firestore()
    .collection("emergencies")
    .doc(firebase.auth().currentUser.uid)
    .update({
      victimState: data,
    });
};
