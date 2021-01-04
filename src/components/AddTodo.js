
import React, { Component } from 'react'
export class AddTodo extends Component {
    constructor(props){
        super(props)
        // console.log(props.testAdd)
        this.state={
            title:'',
        }
    }

    render() {
        const onChange = (e) => {
            // console.log(this.state.title,e.target.value)
            this.setState(
                {[e.target.name]: e.target.value}
            )
        }; 
        const handleclick = (e) =>{
            // console.log("hello world");
            e.preventDefault();
            // console.log(this.state.title)
            this.props.addTodo( this.state.title);
            this.setState({title: ''});
        }    
        return (
            <div>
                <form >
                    <div className="addTodoContainer">
                        <div className ="headerContainer">
                            <div className= "btnNewTodo" onClick={handleclick} >
                                <i className="fa fa-plus-square custom-icon" aria-hidden="true"></i>
                                New
                            </div>
                                {/* <input className = "btnNewTodo" type="submit" ></input> */}
                                <input className = "boxAddTodo" type="text" placeholder="Add Todo..."
                                autoComplete="off"
                                name="title" 
                                value={this.state.title} 
                                onChange={onChange} >
                                </input>
        
                            </div> 
                    </div>  
                </form>
            </div>
        )
    }
}


export default AddTodo
