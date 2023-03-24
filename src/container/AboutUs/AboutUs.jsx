import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about spoon' className='spoon__img' />
        <p className='p__opensans'>Since our modest beginnings in 2005 with a little space in Toronto’s stylish Yorkville locale, Gericht ‘s development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about spoon' className='spoon__img' />
        <p className='p__opensans'>Organizer, Craig Stephen, opened the first Gericht Restaurant in Los Alamitos, California, on September 27, 1977. Today, there are 37 areas all through Arizona, California, Illinois, Louisiana, Nevada, Oregon, Tennessee, and Washington.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
