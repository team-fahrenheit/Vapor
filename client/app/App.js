import React from 'react';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import AllProducts from '../features/allProducts/allProducts';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <AllProducts/>
    </div>
  );
};

export default App;
