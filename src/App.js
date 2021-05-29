import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import {useState, useEffect} from 'react'
import {uuid, uuidv4} from 'uuidv4'
import ContactDetail from './components/ContactDetail'
import EditContact from './components/EditContact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandeler = (contact)=>{
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  }

  const removeHandeler = (id)=>{
    const newContactList = contacts.filter(contact=>{
      return contact.id != id;
    });
    setContacts(newContactList);
  }

  const editHandeler = (con) =>{
    console.log('from edit', con);
    const editedContacts = contacts.map(contact=> contact.id === con.id ? con : contact);
    setContacts(editedContacts);
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
       <Router>
        <Switch>
            <Route path="/" exact component={()=> <ContactList contacts={contacts} removeHandeler={removeHandeler}/>} />
            <Route path="/add" component={()=> <AddContact addContactHandeler={addContactHandeler}/>}/>
            <Route path="/contactDetail/:id" component={ContactDetail}/>
            <Route path="/editContact/:id" component={()=> <EditContact editHandeler={editHandeler}/>}/>
        </Switch>
       </Router>
       
    </div>
  );
}

export default App;
