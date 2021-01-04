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
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id,title,complete)} checked={complete}/> {' '}
                {title}
                {' '}
                <button onClick= {this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
            
        )
    }
}
const btnStyle = {
    background: '#ff6666',
    color: '#fff',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    
    
}
Todoitem.propTypes = {
    todo:propTypes.object.isRequired
}

export default Todoitem;
