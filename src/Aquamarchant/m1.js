import React from 'react';
import './m.css';
import Navbar2 from '../components/Navbar2';
 function m1() {
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
     <Navbar2 /><br />
<iframe style={style}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3009188230344!2d80.62430181417564!3d16.510899031836978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f00222b00851%3A0x96fda47c541c8ff7!2sMahanti%20Fish%20%26%20Chicken%20Market!5e0!3m2!1sen!2sin!4v1607742045605!5m2!1sen!2sin" ></iframe>    

<div>

Mahanti Fish Markets<br/>
<p> Address : Mahanti Fish & Chicken Market
Besant Rd, 2 Town, Governor Peta, Vijayawada, Andhra Pradesh 520002</p>
                     <br/>
<p>  Hours: Open 5:00 AM  ⋅  Closes 9:30PM</p>
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

export default m1;