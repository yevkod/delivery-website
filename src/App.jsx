import React, { useState } from 'react';
import './App.css';
import { NavbarView } from './components/navbar/Navbar';
import { BrowseView } from './components/browse/BrowseView';
import { TrustedView } from './components/trusted/TrustedView';
import { WorksView } from './components/works/WorksView';
import { GreatView } from './components/great/GreatView';
import { AwayView } from './components/away/AwayView';
import { FeaturesView } from './components/features/FeaturesView';
import { HassleView } from './components/hassle/HassleView';
import { ClientsSayView } from './components/ClientsSay/ClientsSayView';
import { ClientsTodayView } from './components/ClientsToday/ClientsTodayView';
import { DeliverView } from './components/Deliver/DeliverView';
import { FooterView } from './components/Footer/FooterView';
import { BurgerMenuView } from './components/burgerMenu/burgerMenuView';


function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className='overflow-hidden'>
      {menu && (
        <div className='flex lg:hidden fixed rounded-lg z-[50] top-[90px] right-0 flex-col shadow-md bg-white'>
          <BurgerMenuView setMenu={setMenu} />
        </div>
      )}
      <NavbarView menu={menu} setMenu={setMenu} />
      <div id='browseView'><BrowseView /></div>
      <div id='trustedView'><TrustedView /></div>
      <div id='worksView'><WorksView /></div>
      <div id='greatView'><GreatView /></div>
      <div id='awayView'><AwayView /></div>
      <div id='featuresView'><FeaturesView /></div>
      <div id='hassleView'><HassleView /></div>
      <div id='clientsSayView'><ClientsSayView /></div>
      <div id='clientsTodayView'><ClientsTodayView /></div>
      <div id='deliverView'><DeliverView /></div>
      <FooterView />
    </div>
  );
}

export default App;
