import React from 'react';
import AppBox from "../components/AppBox"
import style from './App.module.scss';
import Clover from '../components/BackgroundComponents/Clover';

function App() {
  return (
    <div className={ style.backgroundbox }>
      <Clover></Clover>
      <AppBox></AppBox>
    </div>
  );
}

export default App;
