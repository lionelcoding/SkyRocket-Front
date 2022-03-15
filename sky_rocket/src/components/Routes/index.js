import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../../pages/Home';
import Profil from '../Profil/Profil';

const index = () => {
    return (
    <div>
             <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      </BrowserRouter>
    </div>

    );
};

export default index;