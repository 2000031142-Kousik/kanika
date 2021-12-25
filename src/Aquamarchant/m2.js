import React from 'react';
import './Aquamerchant';
import Navbar2 from '../components/Navbar2';
import './m.css'

 function m2() {
  const style = {
    height: "650px",
    width: "500px",
    borderWidth: '5px', 
    }
    const style1 = {
        height: "650px",
        width: "1000px",
        borderWidth: '1005px', 
        }
   

     return (
  <div className='framebox'>
    <Navbar2 /><br/>
  <iframe style={style}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.306750956427!2d80.67518171417562!3d16.51060433184504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb63b0703629%3A0x9cb6b41ae5613fd7!2sNPK%20Live%20Fish!5e0!3m2!1sen!2sin!4v1607742596939!5m2!1sen!2sin" ></iframe>    
  <div>
  NPK Live Fish
  <p>Address : Address : NPK Live Fish
                       Mahanadu Rd, opp. SML Isuze Service Center, Auto Nagar, Vijayawada, Andhra Pradesh 520007</p>
<p> Hours: Open 5:00 AM  ⋅  Closes 9:30PM</p>

</div>
<div className='table'>
<p>Price Chart </p>
<table style={style}>
<tr>
    <th>Fish</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Katla</td>
    <td>130 /Kg</td>
  </tr>
  <tr>
    <td>Mrigal Fish</td>
    <td>100 /Kg</td>
  </tr>
  <tr>
    <td>prance fish</td>
    <td>150 /Kg</td>
  </tr>

</table>

 </div>

  </div>
  )
}

export default m2;