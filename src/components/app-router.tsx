import { FC, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'

import LoginScreen from './auth/login-screen';
import MainScreen from './main-screen/main-screen';

import MainScreen2 from './neo-design/main-screen/main.screen';

import CatalogueScreen from './neo-design/catalogue-screen/catalogue.screen'
import DeliveryScreen from './neo-design/delivery-screen/delivery.screen';
import ClientScreen from './neo-design/client-screen/client.screen';
import ForOrderScreen from './neo-design/for-order-screen/for.order.screen';
import DiscountScreen from './neo-design/discount-screen/discount.screen';
import NoveltiesScreen from './neo-design/novelties-screen/novelties.screen';
import ProfileScreen from './neo-design/profile-screen/profile.screen';

const AppRouter: FC = () => {
  const {pathname} = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <Routes>
        <Route element={<MainScreen />} path='/'/>
        <Route element={<LoginScreen />} path='/login' />
        <Route element={<CatalogueScreen />} path='/catalogue' />
        <Route element={<DeliveryScreen />} path='/delivery' />
        <Route element={<ClientScreen />} path='/client' />
        <Route element={<ForOrderScreen />} path='/for-order' />
        <Route element={<DiscountScreen />} path='/stock' />
        <Route element={<NoveltiesScreen />} path='/novelties' />
        <Route element={<ProfileScreen />} path='/profile' />

        <Route element={<MainScreen2 />} path='/mainneo' />

        <Route path='*' element={<MainScreen />} />
    </Routes>
  )
}

export default AppRouter;
