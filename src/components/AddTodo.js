import { createFactory } from "react";

import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"  style={AddTodoStyle} placeholder="Add Todo..." ></input>
                </form>
            </div>
        )
    }
}
const AddTodoStyle ={
    border: 'none',
    backgroundColor: '#fff',
    color: 'blue',
    padding: '10px',
    borderradius: '10px',
    margin: '10px'
}

export default AddTodo
