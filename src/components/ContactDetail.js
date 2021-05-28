import React from 'react'
import {Link} from 'react-router-dom'
import userImage from "../images/img_avatar.png";

function ContactDetail(props) {
    const {id,name,email} = props.location.state.contact;

    console.log('detail',props.location.state.contact);
        
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={userImage} alt="user"/>
                </div>

                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
                <div style={{textAlign:'center', padding: "10px"}}>
                    <Link to="/">
                        <button className="ui button blue">Back To My Contact List</button>
                    </Link>
                </div>     
            </div>
        </div>
    )
}

export default ContactDetail
