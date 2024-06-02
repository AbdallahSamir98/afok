// src/Components/Home/HomeDisplay.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactUs from '../ContactUs/ContactUs';
import LastWorks from '../LastWorks/LastWorks';
import OurServices from '../OurServices/OurServices';
import PrepareWork from '../PrepareWork/PrepareWork';
import Testimonials from '../Testimonials/Testimonials';
import WeAreInformation from '../WhoWeAre/WeAreInformation';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Home from './Home';

const HomeDisplay = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Home />
      <div className="bg-white">
        <WhoWeAre />
        <WeAreInformation />
        <OurServices />
        <LastWorks />
        <PrepareWork />
        <Testimonials />
        <ContactUs />
        
        <div className='container' style={{ }}>
          <h1>{t('welcome')}</h1>
          <p>{t('description')}</p>
          <button onClick={() => changeLanguage('en')} style={{ marginRight: '10px' }}>English</button>
          <button onClick={() => changeLanguage('ar')}>Arabic</button>
        </div>
      </div>
    </>
  );
};

export default HomeDisplay;
