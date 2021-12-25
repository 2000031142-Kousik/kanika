import React from 'react';
import '../Aquamarchant/m.css';
import Navbar2 from '../components/Navbar2';

 function a3() {
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
      <iframe style={style}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30597.804523964376!2d80.60667047106675!3d16.539946769851625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e56de69bcdc1%3A0x311bf742ec34bda0!2sRythu%20bazar%20Farmers%20Vegetable%20Market!5e0!3m2!1sen!2sin!4v1607743099705!5m2!1sen!2sin" ></iframe>    
<div>
Rythu bazar Farmers Vegetable Market
<p>Address : Nunna Rd, Payakapuram, Vijayawada,Andhra Pradesh 520015</p>

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

export default a3;