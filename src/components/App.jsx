import React, { Component, PropTypes } from 'react';
import MainLayout from '../layouts/MainLayout/MainLayout';
import IndexView from './Views/Index';
import FormBasic from './Views/FormBasic';
import FormCheck from './Views/FormCheck';
import TableBasic from './Views/TableBasic';
import CarouselBasic from './Views/CarouselBasic';
import CollapseBasic from './Views/CollapseBasic';
import ModalBasic from './Views/ModalBasic';

const App = ({ location }) => {
  let View = IndexView;
  const path = { location }.location.pathname;
  if (path == '/') {
    View = IndexView;
  }
  if (path == '/form1') {
    View = FormBasic;
  }
  if (path == '/form2') {
    View = FormCheck;
  }
  if (path == '/table') {
    View = TableBasic;
  }
  if (path == '/carousel') {
    View = CarouselBasic;
  }
  if (path == '/collapse') {
    View = CollapseBasic;
  }
  if (path == '/modal') {
    View = ModalBasic;
  }
  return (
    <MainLayout> 
      <View />   
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
