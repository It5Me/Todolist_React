import React, { Component } from 'react';
import propTypes from "prop-types";

class Todoitem extends Component{
    constructor(props){
        super(props)

    }
    getStyle =() =>{ 
        return{
            padding: '5px',
            background: '#f4f4f4',
            borderBottom: '2px #855ec4 dotted ',
            textDecoration: this.props.todo.complete ? 'line-through':'none'
        }
    }
    render(){
        const {id,title,complete} = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p>
                <div className="checkbox">
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id,title,complete)} checked={complete}/> {' '} </div>
                <div className="inputNewTodo">{title}</div>
                {' '}   
                <button  className="delStyle btnStyle-icon" onClick= {this.props.delTodo.bind(this,id)} >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                </p>
            </div>
            
        )
    }
}


export default Todoitem;
