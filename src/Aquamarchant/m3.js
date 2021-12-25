import React from 'react';
import Navbar2 from '../components/Navbar2';
import './Aquamerchant';
import './m.css';

 function m3() {
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
  
<div className='framebox'><Navbar2/><br/>
<iframe style={style}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30602.446796338223!2d80.65986073005742!3d16.510649880990275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e545a4347065%3A0x56298182bad8eb01!2sKishore%20Live%20Fish%20%26%20Chicken!5e0!3m2!1sen!2sin!4v1607742809565!5m2!1sen!2sin" ></iframe>    
<div>
KISHORE Live Fish
<p>Address : Kishore Live Fish & Chicken
                     21-11-21/1 Bapuji Rao Road Opposite to 13th line, near Old Post Office, Madhura Nagar, Vijayawada, Andhra Pradesh 520011</p>
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

export default m3;