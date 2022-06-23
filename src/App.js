// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import './Utils.css'
import BtNavbar from './component/BtNavbar';
import Content from './component/Content';
import TpNavbar from './component/TpNavbar';

// import BtNavigation from '../learning/BtNavigation';


function App() {
  return (
    <div className='container my-2'>
   <TpNavbar/>
<BtNavbar/>
<Content/>
    </div>
  );
}

export default App;
