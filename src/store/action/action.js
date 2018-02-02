import firebasedb from '../firebase';

// const config = {
//     apiKey: "AIzaSyB7HiXtnvwUvMamP8KbIg76LSPSXYjB4M0",
//     authDomain: "react-redux-7e2f7.firebaseapp.com",
//     databaseURL: "https://react-redux-7e2f7.firebaseio.com",
//     projectId: "react-redux-7e2f7",
//     storageBucket: "react-redux-7e2f7.appspot.com",
//     messagingSenderId: "671627665113"
//   };
//   firebase.initializeApp(config);
// const firebasedb = db
var db = firebasedb.database();

export const ActionTypes = {
    GETTINGTODO:'GETTINGTODO',
    DELETINGTODO: 'DELETINGTODO',
    DELETEALL : "DELETEALL"
}

export function addingTodoAction(todo) {
    return dispatch => {
        db.ref("/").child("todos").push(todo)
    }
}

export function renderingTodoAction(data) {
    return dispatch => {

        dispatch({ type: ActionTypes.GETTINGTODO, payload: data })

            

}
}

export function deleteAllAction() {
    return dispatch => {
        db.ref("/").child("todos").remove()
        let todos = []
        dispatch({ type: ActionTypes.DELETEALL, payload: todos})

    }
}
