import React from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import m1 from './Aquamarchant/m1';
import m2 from './Aquamarchant/m2';
import m3 from './Aquamarchant/m3';
import m4 from './Aquamarchant/m4';
import m5 from './Aquamarchant/m5';
import m6 from './Aquamarchant/m6';
import a1 from './Agrimerchant/a1';
import a2 from './Agrimerchant/a2';
import a3 from './Agrimerchant/a3';
import a4 from './Agrimerchant/a4';
import a5 from './Agrimerchant/a5';
import a6 from './Agrimerchant/a6';
import Videolink from './VideoArea/Videolink';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Getstarted from './components/Getstarted'
import Homelogin from './components/Homelogin'
import Form from './components/Form';
import Form2 from './components/Form2';
import Agrimerchant from './Agrimerchant/Agrimerchant';
import Aquafarmer from './Aquafarmer/Aquafarmer';
import Aquamerchant from './Aquamarchant/Aquamerchant';
import Agrifarmer from './Agrifarmer/Agrifarmer';
import Loginpage from './components/pages/Loginpage';
import signuppage from './components/pages/Sighnuppage';
import Homeloginpage from './components/Homeloginpage';
import help from './Farmer Desk/help';

function App() {
  return (
   <>
    <Router> 
  

<Switch>
<Route path='/sign-up' exact component=
  {signuppage}/>
   <Route path='/login'>
            <Loginpage/>
          </Route>
  <Route path='/' exact component=
  {Home}/>
  <Route path='/Getstarted' exact component=
  {Getstarted}/>
   <Route path='/sign-up' exact component=
  {Form}/>
  <Route path='/Login' exact component=
  {Form2}/>
   <Route path='/Homelogin' exact component=
  {Homeloginpage}/>
  <Route path='/Agrimerchant' exact component=
  {Agrimerchant}/>
  <Route path='/Aquafarmer' exact component=
  {Aquafarmer}/>
   <Route path='/Aquamerchant' exact component=
  {Aquamerchant}/>
   <Route path='/Agrifarmer' exact component=
  {Agrifarmer}/>
  <Route path='/m1' exact component=
  {m1}/>
<Route path='/m2' exact component=
  {m2}/>
  <Route path='/m3' exact component=
  {m3}/>
  <Route path='/m4' exact component=
  {m4}/>
  <Route path='/m5' exact component=
  {m5}/>
  <Route path='/m6' exact component=
  {m6}/>
  <Route path='/a1' exact component=
  {a1}/>
<Route path='/a2' exact component=
  {a2}/>
  <Route path='/a3' exact component=
  {a3}/>
  <Route path='/a4' exact component=
  {a4}/>
  <Route path='/a5' exact component=
  {a5}/>
  <Route path='/a6' exact component=
  {a6}/>
<Route path='/Videolink' exact component=
  {Videolink}/>
<Route path='/help' exact component= 
{help}/>

</Switch>
    </Router>
</> 
  );
}

export default App;
