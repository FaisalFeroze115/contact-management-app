import React from 'react'
import ContactCard from "./ContactCard"
import {Link} from 'react-router-dom'


const ContactList = ({contacts, removeHandeler}) => {
    const deleteContact = (id)=>{
        removeHandeler(id);
        //console.log(id);
    }

    const renderContactList = contacts.map(contacts=>{
        return(
            <ContactCard key={contacts.id} contacts={contacts} deleteContact={deleteContact}/>
        );
    })

    
    return (
        <div className="ui celled list">
            <div style={style_div}>
                <h2>My All Contacts</h2>
                <Link to="/add">
                    <button className="ui button blue">Add New Contact</button>
                </Link>
            </div>
            
            {renderContactList}
        </div>
    )
}

const style_div = {
    display: 'flex',
    justifyContent: 'space-between',

}

export default ContactList
