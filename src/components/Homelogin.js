import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';
import './Cards.css';
import Footer from './Footer';
import Navbar2 from './Navbar2';
import Home from './pages/Home';

 function Homelogin() {
  return (
    
    <div className='hero-container'>
      
      <img src="/images/aaa.jpg" />
      
     <div>
 
     <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                  <h1>Related to Agriculture World      |</h1>
                    <Carditem
                    src='images/merchant.webp'
                    text='Agri Merchant'                   
                    desc='Find all Markets to sell your crops at best price'
                    path='/Agrimerchant'
                    btntext='Know More'
                    className='card1'
                    />
                    <Carditem
                    src='images/farmer.webp'
                    text='Agri Farmer'                 
                    desc='All Farmers currently working'
                    path='/Agrifarmer'
                    btntext='Find Now'
                    className='card2'
                    />
                    
                    </ul>
                    <ul className='cards__items'> 
                    <h1>Related to Aquaculture World      |</h1>
                    <Carditem
                    src='images/1.png'
                    text='Aqua Merchant'
                     desc='Sell your fishes here '
                    btntext='Know More'
                    path='/Aquamerchant'
                    className='card1'
                    />
                     <Carditem
                    src='images/2.png'
                    text='Aqua Farmer'                 
                    desc='all fisherman currently working nearby'
                    path='/Aquafarmer'
                    btntext='Find Now'
                    className='card2'
                    />
                    </ul>
                    <ul className='cards__items'>
                    <h1>Others related to farming      |</h1>
                     <Carditem
                    src='images/info (2).jpg'
                    text='Farmers Desk'
                    desc='At Your Help...'
                    btntext='Know More'
                    path='/help'
                    className='card1'
                    />
                      <Carditem
                    src='images/video.jpg'
                    text='Watch Us'
                    desc='Suggested videos to watch'
                    btntext='Open'
                    path='/Videolink'
                    className='card1'
                    />
                    </ul>
                     
                </div>
           
            </div>
            
     </div>
     <Footer/>
      
    </div>
  );
}
export default Homelogin;