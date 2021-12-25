import React from 'react';
import '../Aquamarchant/m.css';
import Navbar2 from '../components/Navbar2';

 function a4() {
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
      <iframe style={style}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.632218428032!2d80.6363994148142!3d16.544654888588703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e55e27b18901%3A0x100c1d2458cf1cf5!2sRythu%20Bazar%20Ajithsinghnagar!5e0!3m2!1sen!2sin!4v1607743166866!5m2!1sen!2sin" ></iframe>    
<div>
Rythu Bazar Ajithsinghnagar
<p>Address : Ajit Singh Nagar, Vijayawada, Andhra Pradesh 520015</p>

<br/><p> Hours: Open 5:00 AM  ⋅  Closes 9:30PM</p>
</div>
<div className='table'>
<p>Price Chart </p>
 
  <table style={style}>
  <tr>
    <th><b>Vegetables</b></th>
    <th><b>Prices</b></th>
  </tr>
  <tr>
    <td>Tomato</td>
    <td>45 /KG</td>

  </tr>
  <tr>
    <td>Beans</td>
    <td>80 /KG</td>
  </tr>
  <tr>
    <td>Carrot</td>
    <td>50 /KG</td>
  </tr>
  <tr>
   <td>Drumstick</td>
    <td>60 /KG</td>
  </tr>
    <tr>
    <td>Green Chili</td>
    <td>40 /KG</td>
  </tr>
    <tr>
     <td>Onion</td>
    <td>25 /KG</td>
  </tr>
      <tr>
     <td>Potato</td>
    <td>20 /KG</td>
  </tr>
  
</table>
  </div>
  </div>

  )
}

export default a4;