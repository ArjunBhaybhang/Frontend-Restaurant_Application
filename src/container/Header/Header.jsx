import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';


const Header = () => (
  <div className='app__header app__wraper section__padding' id='home'>
    <div className='app__wraper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The Key To Fine Dine</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}} >The art of dining well is no slight art, the pleasure not a slight pleasure; neither the greatest captains nor the greatest philosophers have disdained the use or science of eating well.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wraper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
