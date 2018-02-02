import React, { Component } from 'react';
// import { addingTodoAction } from '../store/action/action';
import { renderingTodoAction } from '../store/action/action';
// import { editingStateAction } from '../store/action/action';

import { connect } from 'react-redux';
import firebase from 'firebase';


class TodoList extends Component {
    deletingTodo(a,b){
        firebase.database().ref('/').child("todos/"+ a).remove()
        let todos = this.props.addedTodos;
        let afterDeleted = todos.slice(0,b).concat(todos.slice(b+1)) 
        this.props.rendering(afterDeleted)
    }
   editingHandler(id,key,todo){
    this.props.editingFunc(id,key,todo)
   }
    render(){
    console.log(this.props.editiing)
        // console.log(this.props.addedTodos)
        return(
                        
            <div>

                <div>
                    <br /><br />
           <ul className="collection">
       { this.props.addedTodos.map((todo,key)=>{
        //    var str = todo.todo.toUpperCase();
        //    var firstCharacter = str.charAt(0);isko choro 
           
           return(
               
                <li className="collection-item avatar" key={key} id={todo.id}><div><i className="material-icons circle">{firstCharacter}</i></div><i className="todotext">{todo.todo}</i>
                <button className="btn listbtn todobtn" onClick={this.deletingTodo.bind(this,todo.id,key)}> Delete </button>
                <button className="btn listbtn todobtn" onClick={this.editingHandler.bind(this,todo.id,key,todo.todo)} >Edit</button>
                </li>//// choro yr me kl dekhta hu// tm agr cde git pe dal do to mujhe link dedena ok mai tumhai chat app ka structure dikhao apna 
                // wo woi h na jo sir ne banaya tha//ptananhi sir nae task diya tha na theory mai mai nae hota ho.//to bana li tmne ?//nhi abhi signup hogaya hai login bhi hogaya hai bs user ki profile bnaoga image upload ka km krwana hai dikhata ho w8


           )
        })
    }
    
           </ul>
          
                </div>
            

           
            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        addedTodos: state.root.todos,
        editingState: state.root.editingState

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        rendering: (finaltodo)=>{dispatch(renderingTodoAction(finaltodo))},
    //    editing: ()=>{dispatch(editingStateAction())}
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);