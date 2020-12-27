import React, { Component } from "react";
import Todoitem from "./Todoitem";
import propTypes from "prop-types";

class Todos extends Component{
    render(){
        return this.props.todos.map((todo) =>(
            <Todoitem key={todo.id} todo={todo}></Todoitem>
        ));
           
    }
}
Todos.propTypes = {
    todos:propTypes.array.isRequired
}

export default Todos;