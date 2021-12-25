import React from 'react';
import './Aquafarmer.css';
import { Button } from '../components/Button';
import Carditem from '../components/Carditem';
import Cards from '../components/Cards';
import '../components/Cards.css';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

 function Aquafarmer() {
  return (
<div><Navbar2/>
<div className='hero-container1'>
      <img src="/images/back3.jpg" />
     <div>
     <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='images/fishman1.jpg'
                    text='Ravi'                   
                    desc=''
                    path=''
                    btntext='view Details'
                    className='card1'
                    />
                    <Carditem
                    src='images/fishman3.jpg'
                    text='Sushila'                 
                    desc=''
                    path='/sushila'
                    btntext='View Details'
                    className='card2'
                    />
                    </ul>
                    <ul className='cards__items'> 
                    <Carditem
                    src='images/fishman2.jpg'
                    text='Shiva Gopi'
                     desc=' '
                    btntext='view Details'
                    path='/Shiva'
                    className='card1'
                    />
                     <Carditem
                    src='images/fishman4.jpg'
                    text='Shankar kumar'                 
                    desc=''
                    path='/shankar'
                    btntext='view Details'
                    className='card2'
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
export default Aquafarmer;