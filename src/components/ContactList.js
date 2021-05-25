import React from 'react'
import ContactCard from "./ContactCard"


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
            {renderContactList}
        </div>
    )
}

export default ContactList
