import './App.css';
import Todos from "./components/Todos";
import Todoitem from "./components/Todoitem";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import React, { Component } from "react";
var axios = require('axios');
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [

      ],
      test:false
    }
    // this.getDatafromServer
  }
  setDataTodos = (value) =>{
    this.setState({
      todos:value
    })
  }
  getMaxOfId = () =>{
    console.log("run",this.state.todos)
    let maxOfId = -1
    this.state.todos.forEach((item) => {
      console.log("gg",item)
      if (item.id>maxOfId){
        maxOfId=item.id
      }
    })
    return maxOfId 
    // console.log(maxOfId)
  }
  componentDidMount(){
    // console.log("Hello Wolrd")
    this.getDatafromServer()
    
  }
  componentDidUpdate(prevProps,prevState){
    // console.log(prevState.todos,this.state.todos)
    if (prevState.todos!==this.state.todos){
      this.sortTodo()
      this.sendDataToServer()
    }
  }
  
  sendDataToServer=async() =>{
    console.log(this.state.todos)
    var config = {
      method: 'post',
      url: 'http://localhost:5000/sendData',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        "todos": this.state.todos
      })
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  getDatafromServer=async() =>{
    var config = {
      method: 'get',
      url: 'http://localhost:5000/getData',
      headers: { }
    };
    
    const result = await axios(config)
    .then(function (response,) {
      // console.log(response.data.data);
      return response.data.data.todos
    })
    .catch(function (error) {
      console.log(error);
      return []
    });
    console.log(result)
    this.setDataTodos(result)
    
    
  }
  sortTodo = () =>{
    this.setState({
      todos:
        this.state.todos.sort(function(a,b){
          // console.log(a,b,a.complete-b.complete)
          return a.complete - b.complete})

      }
    )
  }
  // Toggle
  markComplete = (id,title,complete) =>{
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id===id){
        todo.complete =!todo.complete
      }
      return todo;
    })});
    
  }
  delTodo =(id)=>{
      this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  addTodo = (title)=>{
    console.log(title,this.state.todos.length)
    this.setState({
      todos: [{
        id: this.getMaxOfId()+1,
        title:title,
        complete:false
      },
      ...this.state.todos
    ]
    })
    
    
  }
  render() {
    return (
      
      <div className="App" >
          <Header/>
          <AddTodo addTodo={this.addTodo} ></AddTodo>
          <Todos todos={this.state.todos} markComplete= {this.markComplete} delTodo={this.delTodo}></Todos>
      </div>
      
    );
  }
}

export default App;
