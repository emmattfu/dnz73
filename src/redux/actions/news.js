import { GET_NEWS, GET_SELECTED_NEWS, CLEAR_SELECTED_NEWS } from "../types";
import firebase from '../../firebase'

export const getNews = () => {
    return (dispatch) => {
        const usubscribe = firebase
        .firestore()
        .collection("news")
        .onSnapshot((snapshot) => {
          const newData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          dispatch({payload: newData, type: GET_NEWS})
        });
  

       
    }
}

export const getSelectedNews = (id) => {
  return(dispatch) => {
    let docRef = firebase.firestore().collection("news").doc(id)
    docRef.get()
    .then(doc => dispatch({payload: doc.data(), type: GET_SELECTED_NEWS}))
  }
}

export const clearSelectedNews = () => {
  return {type: CLEAR_SELECTED_NEWS, payload: ""}
}