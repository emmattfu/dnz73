import { GET_NEWS } from "../types";
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