
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Adduser } from './compenent/Adduser';
import Edituser from './compenent/Edituser';
import UserDetails from './compenent/userdetail';
import User from './compenent/users';
import { data } from './Data/Data';


function App() {
  const [user,setUser]=useState(data);
  return (
    <div className="App">
 <Switch>

    <Route exact path="/"><User 
    user={user}
    setUser={setUser} 
    /></Route>

   <Route path="/Create/user"><Adduser 
    user={user}
    setUser={setUser}
    /></Route>

<Route path="/edit/:Id"><Edituser 
    user={user}
    setUser={setUser}
    /></Route>


  <Route path="/user/:Id"><UserDetails 
   user={user}
   setUser={setUser} />
   </Route>

   <Route path="**">
  <h1>No Content</h1>
  </Route>
  
 </Switch>
      
     
    </div>
  );
}

export default App;


