import React, { useState } from 'react';
import './App.css';
import { NavbarView } from './components/navbar/Navbar';
import { BrowseView } from './components/browse/BrowseView';
import { TrustedView } from './components/trusted/TrustedView';
import { WorksView } from './components/works/WorksView';
import { GreatView } from './components/great/GreatView';
import { AwayView } from './components/away/AwayView';
import { FeaturesView } from './components/features/FeaturesView';
import { HassleView } from './hassle/HassleView';
import { ClientsSayView } from './components/ClientsSay/ClientsSayView';
import { ClientsTodayView } from './components/ClientsToday/ClientsTodayView';
import { DeliverView } from './components/Deliver/DeliverView';
import { FooterView } from './components/Footer/FooterView';
import { BurgerMenuView } from './components/burgerMenu/burgerMenuView';


function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu && (
        <div className='flex lg:hidden fixed z-[50] top-[119px] right-0 flex-col shadow-md bg-white'>
          <BurgerMenuView />
        </div>
      )}
      <NavbarView menu={menu} setMenu={setMenu} />
      <BrowseView />
      <TrustedView />
      <WorksView />
      <GreatView />
      <AwayView />
      <FeaturesView />
      <HassleView />
      <ClientsSayView />
      <ClientsTodayView />
      <DeliverView />
      <FooterView />

    </>
  );
}

export default App;
