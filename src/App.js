import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import {useState, useEffect} from 'react'

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  const addContactHandeler = (contact)=>{
    console.log(contact);
    setContacts([...contacts, contact]);
  }

  useEffect(()=>{
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContact) setContacts(retriveContact);
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts])


  return (
    <div className="ui container">
       <Header/>
       <AddContact addContactHandeler={addContactHandeler}/>
       <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
