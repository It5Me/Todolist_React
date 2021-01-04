import { createFactory } from "react";

import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        const handleclick=()=>{
            console.log("hello world")
        }
        return (
            <div>
                <form>
                    <div className="addTodoContainer">
                        <div className ="headerContainer">
                            <div className= "btnNewTodo" onClick={handleclick}>
                                <i className="fa fa-plus-square custom-icon" aria-hidden="true"></i>
                                New
                            </div>
                                {/* <input className = "btnNewTodo" type="submit" ></input> */}
                                <input className = "boxAddTodo" type="text"   placeholder="Add Todo..." ></input>
                            </div> 
                    </div>  
                </form>
            </div>
        )
    }
}


export default AddTodo
