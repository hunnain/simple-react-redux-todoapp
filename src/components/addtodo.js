import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { addingTodoAction } from '../store/action/action';
import  TodoList  from './todolist';
import { renderingTodoAction } from '../store/action/action';
import { deleteAllAction } from '../store/action/action';
import './style.css';
import '../App.css'
 
class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            editingState: false,
            editingTodo: "",
            editingTodoId:"",
            editingIndex:"",
            todo: ""
        }
    firebase.database().ref('/').child("todos").on("child_added", (snap)=>{
          let todoData = snap.val()
          todoData.id = snap.key
          let TodoObj = this.props.todos
          TodoObj = TodoObj.concat(todoData)
          this.props.rendering(TodoObj)

 })
 firebase.database().ref('todos/').on('child_changed', (data) => {
            let editedTodo = data.val();
            editedTodo.id = data.key;
            console.log(editedTodo)
            let todos = this.props.todos
            todos[this.state.editingIndex] = editedTodo
            this.props.rendering(todos)
  })
}
changeHandler(ev){
    this.setState({
        todo: ev.target.value
    })
}
addTodo(){
    if(this.state.todo !== ""){
let todo ={
        todo:this.state.todo
    } 
this.props.addingTodo(todo)
this.setState({
        todo: ""
    })
    }
    else{
        alert("Enter Something to Add")
    }
}
 editTodo(id,key,todo){
        console.log("editing" ,id,key,todo)
        this.setState({
            editingState:true,
            editingTodo:todo,
            editingTodoId: id,
            editingIndex:key
        })

    }
    doneEditing(){
firebase.database().ref('/').child("todos/" + this.state.editingTodoId).set({todo:this.refs.update.value})
this.setState({editingState:false})
       } 
       cancelEditing(){
           this.setState({editingState:false})
       }
       deleteAlll(){
           this.props.deleteAll()
           console.log(this.props.todos)
       }
    render(){
        return(
            <div className="main">
                <nav>
    <div class="navbar nav-wrapper">
      <a href="#" class="brand-logo">TODO APP</a>
    </div>
  </nav>
            {this.state.editingState !== true
                ?
        <div className="container">
            <h2>TODO</h2>
        <div className="jumbotron text-center">
            <div>
            <input className="form-control" type="text" value={this.state.todo} onChange={this.changeHandler.bind(this)} placeholder="Todo"/>
            </div>
            <button className="btn todobtn" onClick={this.addTodo.bind(this)}>Add Todo</button>
            <button className="btn todobtn" onClick={this.deleteAlll.bind(this)}>Delete All</button>
        </div>    
        <div className="container row">
        
            <div className="col-lg-3 col-md-3 col-sm-0"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <TodoList editiing={this.state.editingState} editingFunc = {this.editTodo.bind(this)}/>
            </div >
            <div className="col-lg-3 col-md-3 col-sm-0"></div>
        </div>    
            
        </div>    
            
        :
        <div className="container jumbotron text-center">
            <h1> EDIT TODO </h1>
        <input type="text" className="form-control" ref="update" placeholder={this.state.editingTodo}/>
            <button className="btn btn-primary" onClick={this.doneEditing.bind(this)}>Save</button>
            <button className="btn btn-primary" onClick={this.cancelEditing.bind(this)}>Cancel</button>
            
        
        </div>
        }
                       </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        todos: state.root.todos
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        addingTodo: (addedTodo)=>{dispatch(addingTodoAction(addedTodo))},
       rendering: (todos)=>{dispatch(renderingTodoAction(todos))},//samjh aya kuch han mene b ese hi ki h yr
       deleteAll: ()=>{dispatch(deleteAllAction())}
       
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(AddTodo);