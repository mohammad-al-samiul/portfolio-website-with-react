import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

const App = () => {
  return (
    <div className="container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
