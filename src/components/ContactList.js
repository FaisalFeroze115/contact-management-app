import React from 'react'
import ContactCard from "./ContactCard"


const ContactList = ({contacts}) => {
    const renderContactList = contacts.map(contacts=>{
        return(
            <ContactCard contacts={contacts}/>
        );
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList
