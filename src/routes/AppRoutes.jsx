import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, Error } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/IGNIT-Crew'
        element={<HomePage />}
        errorElement={<Error></Error>}
      />
    </Routes>
  );
};

export default AppRoutes;
