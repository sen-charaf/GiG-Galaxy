
import { Outlet } from 'react-router-dom';

import React from 'react';
import HeaderBecaumeSeller from '../components/HeaderBecaumeSeller';

function BecaumeSeller() {

  return (
    <>
    <HeaderBecaumeSeller />
      <Outlet />
    </>
  )
}

export default BecaumeSeller
