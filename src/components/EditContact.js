import React, {useState, useEffect} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'


function EditContact({editHandeler}) {
    const history = useHistory();
    const location = useLocation();
    const {id, name, email} = location.state.contact;
    const [newName, setNewName] = useState('dfs');
    const [newMail,setNewMail] = useState('sdfs');
    //console.log('eki vai',location.state.contact);

    const edit = (id) =>{
        let newEditContact = {
            id: id,
            name: newName,
            email: newMail
        }

        editHandeler(newEditContact);
        history.push('/');


    }

    useEffect(()=>{
        setNewName(name);
        setNewMail(email);
    },[])


    const style_div = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    return (
        <div className="ui main">
                <div style={style_div}>
                    <h2>Update Contact</h2>
                    <Link to="/">
                        <button className="ui button blue">Show My Contact List</button>
                    </Link>
                </div>
          
                <form onSubmit={()=>edit(id)} className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input 
                         type="text"
                         name="name" 
                         placeholder="Name" 
                         value={newName}
                         onChange={(e)=>setNewName(e.target.value)}
                         />
                    </div>

                    <div className="field">
                        <label>E-mail</label>
                        <input 
                         type="email" 
                         name="name" 
                         placeholder="Email" 
                         value={newMail}
                         onChange={(e)=>setNewMail(e.target.value)}
                         />
                    </div>
                    <button className="ui button blue">Edit</button>
                </form>

            </div>
    )
}



export default EditContact
