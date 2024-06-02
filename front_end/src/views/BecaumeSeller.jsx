
import { Outlet } from 'react-router-dom';
import './App.css';
import Page1 from './components/Page1';
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
