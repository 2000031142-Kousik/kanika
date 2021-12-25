import React from 'react';
import './Agrimerchant.css';
import { Button } from '../components/Button';
import Carditem from '../components/Carditem';
import '../components/Cards.css';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';


 function Agrimerchant() {
    return (
      <div>
        <Navbar2/>
      <div className='hero-container'>
      <img src="/images/merchant.webp" />
       <div>
       
              <div className='cards__container'>
                  <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <Carditem
                      src='images/a1.jpg'
                      text='Gollapudi Market Yard'                   
                      desc=''
                      path='/a1'
                      btntext='Know More'
                      className='card1'
                      />
                      <Carditem
                      src='images/a2.jpg'
                      text='Agricultural market committee'                 
                      desc=''
                      path='/a2'
                      btntext='Find Now'
                      className='card2'
                      />
                      </ul>
                      <ul className='cards__items'> 
                      <Carditem
                      src='images/a3.jpg'
                      text='Rythu bazar Farmers Vegetable Market'
                       desc=''
                      btntext='Know More'
                      path='/a3'
                      className='card1'
                      />
                       <Carditem
                      src='images/a4.jpg'
                      text='Rythu Bazar Ajithsinghnagar'                 
                      desc=''
                      path='/a4'
                      btntext='Find Now'
                      className='card2'
                      />
                      </ul>
                      <ul className='cards__items'>
                       <Carditem
                      src='images/a5.webp'
                      text='Bhavanipuram Rythu Bazar'
                      desc=''
                      btntext='Know More'
                      path='/a5'
                      className='card1'
                      />
                        <Carditem
                      src='images/a6.jpg'
                      text='Sri Raja Rajeshwari Vegetables'
                      desc=''
                      btntext='Open'
                      path='/a6'
                      className='card1'
                      />
                      </ul>
                       
                  </div>
             
              </div>
       </div>
       <Footer/>
      </div>
      </div>
    );
  }
export default Agrimerchant;