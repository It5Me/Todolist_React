import React, { Component } from 'react';
import propTypes from "prop-types";

class Todoitem extends Component{
    constructor(props){
        super(props)

    }
    getStyle =() =>{ 
        return{
            padding: '5px',
            background: '#C6C0BE',
            opacity:'0.7',
            margin:'3px 0 ',
            textDecoration: this.props.todo.complete ? 'line-through':'none',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center'
        }
    }
    render(){
        const {id,title,complete} = this.props.todo;
        return(
            <div style={this.getStyle()}>
                
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id,title,complete)} checked={complete}/>
                <p className="inputNewTodo">{title}</p>
                <button  className="btnStyle btnStyle-icon delStyle" onClick= {this.props.delTodo.bind(this,id)} >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                
            </div>
            
        )
    }
}


export default Todoitem;
