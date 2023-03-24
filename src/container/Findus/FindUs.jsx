import React from 'react';

import {images} from '../../constants'
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}} >Find Us</h1>
      <div className='app__wrapper-content' style={{flexDirection: 'column'}}>
        <p classname='p__opensans' style={{color: '#DCCA87'}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p classname='p__cormorant' style={{color: '#DCCA87', margin: '2rem', margin:'2rem 0'}} >Opening Hours</p>
        <p classname='p__opensans' style={{color: '#F5EFDB', marginTop: '2rem'}}>Mon - Fri: 10:00 am - 02:00 Am</p>
        <p classname='p__opensans' style={{color: '#F5EFDB', marginTop: '2rem'}}>Sat - Sun: 10:00 am - 03:00 Am</p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}}>Visit Us</button>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find us'/>
      </div>
  </div>
);

export default FindUs;
