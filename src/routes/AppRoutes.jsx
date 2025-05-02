import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, Error } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} errorElement={<Error></Error>} />
    </Routes>
  );
};

export default AppRoutes;
