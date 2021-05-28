import React from 'react'
import user from "../images/avatar.png"

const ContactCard = ({contacts,deleteContact}) => {
    const {id, name, email} = contacts;
    return (
        <div className="" style={style_div}>
            <div className="" style={style_img_div}>
                <img src={user} className="ui avatar image" alt="user image" />
                <div className="header">
                    <p style={p}>{name}</p>
                    <p style={p}>{email}</p>
                </div>
            </div>
            <i 
             onClick={()=>deleteContact(id)}
             style={{color:"red",marginTop:"7px"}} className="trash alternate outline icon">
            </i>
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
