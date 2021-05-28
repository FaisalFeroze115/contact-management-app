import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'

class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
    }
    

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
            alert("Please Enter All Fields");
            return
        }
        this.props.addContactHandeler(this.state);
        this.setState({name:"", email:" ",})
        console.log('yo',this.props);
        const { history } = this.props;
        history.push('/');
        //this.props.history.push("/");
        
    }
    render(){
        return(
            <div className="ui main">
                <div style={style_div}>
                    <h2>Add Contact</h2>
                    <Link to="/">
                        <button className="ui button blue">Show My Contact List</button>
                    </Link>
                </div>
          
                <form onSubmit={this.add} className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input 
                         type="text"
                         name="name" 
                         placeholder="Name" 
                         value={this.state.name}
                         onChange={(e)=>this.setState({name: e.target.value})}
                         />
                    </div>

                    <div className="field">
                        <label>E-mail</label>
                        <input 
                         type="email" 
                         name="name" 
                         placeholder="Email" 
                         value={this.state.value}
                         onChange={(e)=>this.setState({email: e.target.value})}
                         />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>

            </div>
        );
    }
}

const style_div = {
    display: 'flex',
    justifyContent: 'space-between',

}

export default withRouter(AddContact)
