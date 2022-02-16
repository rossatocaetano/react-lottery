import React from 'react';
import './App.css';
import AppBox from "../components/AppBox"
import style from './App.module.scss';

function App() {
  return (
    <div className={ style.backgroundbox }>
      <AppBox></AppBox>
    </div>
  );
}

export default App;
