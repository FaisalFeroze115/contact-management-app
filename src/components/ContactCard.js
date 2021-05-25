import React from 'react'
import user from "../images/avatar.png"

const ContactCard = ({contacts}) => {
    const {id, name, email} = contacts;
    return (
        <div className="item">
            <div className="content">
                <img src={user} class="ui avatar image" alt="user image" />
                <div className="header">
                    {name}
                </div>
                <div>{email}</div>
            </div>
            <i style={{color:"red",marginTop:"7px"}} className="trash alternate outline icon"></i>
        </div>
    )
}

export default ContactCard
