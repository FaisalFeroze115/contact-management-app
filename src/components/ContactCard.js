import React from 'react'
import user from "../images/avatar.png"
import {Link} from 'react-router-dom'


const ContactCard = ({contacts,deleteContact}) => {
    const {id, name, email} = contacts;
    return (
        <div className="" style={style_div}>
            <Link to={{pathname: `/contactDetail/${id}`, state:{contact:contacts}}} >
                <div className="" style={style_img_div}>
                    <img src={user} className="ui avatar image" alt="user image" />
                    <div className="header">
                        <p style={p}>{name}</p>
                        <p style={p}>{email}</p>
                    </div>
                </div>
            </Link>
            <div>
                <i 
                onClick={()=>deleteContact(id)}
                style={{color:"red",marginTop:"7px",cursor:'pointer'}} className="trash alternate outline icon">
                </i>
                <Link to={{pathname:`/editContact/${id}`, state:{contact:contacts}}}>
                    <i 
                    style={{color:"blue",marginTop:"7px",cursor:'pointer'}} className="edit alternate outline icon">
                    </i>
                </Link>
                
            </div>
            
        </div>
    )
}

const style_div = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
}

const style_img_div = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const p = {
    margin: '2px',
}

export default ContactCard
