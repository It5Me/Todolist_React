import React, { Component } from 'react';
import propTypes from "prop-types";

class Todoitem extends Component{
    getStyle =() =>{
    // if(this.props.todo.complete){
    //         return{
    //             textDecoration: 'line-through',
                
                
    //         }
    // }else{
    //         return{
    //             textDecoration: 'none'
    //         }
    //     }
        return{
            padding: '5px',
            background: '#f4f4f4',
            borderBottom: '2px #855ec4 dotted ',
            textDecoration: this.props.todo.complete ? 'line-through':'none'
        }
    }
    render(){
        return(
            <div style={this.getStyle()}>
                <h1>{this.props.todo.title}</h1>
            </div>
            
        )
    }
}
Todoitem.propTypes = {
    todo:propTypes.object.isRequired
}

export default Todoitem;
