import React from 'react';
import './Aquamerchant';
import './m.css';
import Navbar2 from '../components/Navbar2';
 function m5() {
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
        <iframe style={style}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6982221613926!2d80.65216491417532!3d16.490811432383488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fabfe450e493%3A0x4784634936b74e6e!2sRR%20Aqua%20logistics!5e0!3m2!1sen!2sin!4v1607742912274!5m2!1sen!2sin" ></iframe>    
        <div>
        RR Aqua Logistics
        <p>Address : RR Aqua logistics
                             infrount of fish market, Gopavarapugudem, Patamatalanka, Benz Circle, Vijayawada, Andhra Pradesh 520010</p>
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

export default m5;