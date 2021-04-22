import React from 'react';
import './App.css';
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import {Search} from "./Search/Search";

function App() {
  return <div className='app-wrapper'>
    <Header/>
    <div className='app-wrapper-content'>
      <Search/>
    </div>
    <Footer/>
  </div>
}

export default App;
