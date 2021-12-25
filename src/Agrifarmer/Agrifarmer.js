import React from 'react';
import './Agrifarmer.css';
import Carditem from '../components/Carditem';
import '../components/Cards.css';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';


 function Agrifarmer() {
  return (
    <div>
      <Navbar2/>
    <div className='hero-container1'>
    <img src="/images/back4.jpg" />

<div>
     <div className='cards__container'>
     
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='images/varun.jpg'
                    text='Varun'                   
                    desc='I grow Paddy'
                    path='/Varun'
                    btntext='contact'
                    className='card2'
                    />
                    <Carditem
                    src='images/female.jpg'
                    text='yellamma'                 
                    desc='I grow Cotton and wheat'
                    path='/yellamma'
                    btntext='contact'
                    className='card2'
                    />
                    </ul>
                    <ul className='cards__items'> 
                    <Carditem
                    src='images/gopi.webp'
                    text='Surya Gopi'
                     desc='I grow wheat '
                    btntext='Contact'
                    path='/Suya'
                    className='card1'
                    />
                     <Carditem
                    src='images/nikhil.jpg'
                    text='Nikhil kumar'                 
                    desc='I grow paddy and tomato'
                    path='/Nikhil'
                    btntext='contact'
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
export default Agrifarmer;