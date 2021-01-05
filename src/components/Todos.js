import React, { Component } from "react";
import Todoitem from "./Todoitem";
import propTypes from "prop-types";

class Todos extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return this.props.todos.map((todo) =>(
            <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete}  delTodo={this.props.delTodo}></Todoitem>
        ));
           
    }
}
Todos.propTypes = {
    todos:propTypes.array.isRequired
}

export default Todos;