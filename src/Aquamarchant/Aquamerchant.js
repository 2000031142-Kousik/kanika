import React from 'react';
import './Aquamerchant.css';
import { Button } from '../components/Button';
import Carditem from '../components/Carditem';
import Cards from '../components/Cards';
import '../components/Cards.css';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

 function Aquamerchant() {
    return (
      <div><Navbar2/>
      <div className='hero-container1'>
        <img src="/images/wal.jpg" />
       <div>
       
              <div className='cards__container'>
                  <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <Carditem
                      src='images/mahanthi.png'
                      text='Mahanti Fish Markets'                   
                      desc=''
                      path='/m1'
                      btntext='Know More'
                      className='card1'
                      />
                      <Carditem
                      src='images/npk.png'
                      text='NPK Live Fish'                 
                      desc=''
                      path='/m2'
                      btntext='Find Now'
                      className='card2'
                      />
                      </ul>
                      <ul className='cards__items'> 
                      <Carditem
                      src='images/kfm.png'
                      text='KISHORE Live Fish'
                       desc=''
                      btntext='Know More'
                      path='/m3'
                      className='card1'
                      />
                       <Carditem
                      src='images/m.jpg'
                      text='MODERN FISH MARKET'                 
                      desc=''
                      path='/m4'
                      btntext='Find Now'
                      className='card2'
                      />
                      </ul>
                      <ul className='cards__items'>
                       <Carditem
                      src='images/aqua.jpg'
                      text='RR Aqua Logistics'
                      desc=''
                      btntext='Know More'
                      path='/m5'
                      className='card1'
                      />
                        <Carditem
                      src='images/m2.jpeg'
                      text='1 town fish market'
                      desc=''
                      btntext='Open'
                      path='/m6'
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
export default Aquamerchant;