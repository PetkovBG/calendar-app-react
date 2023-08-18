import './App.css';

import { useState } from 'react';

import { getMonth } from './common/common';
import Header from './components/Header/Header';
import Month from './components/Month/Month';
import SideBar from './components/SideBar/SideBar';


function App() {

  // console.table(getMonth());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  

  return (
    <>
      <div className='wrapper-div'>
        <Header />
        <div className='wrapper-sidebar'>
          <SideBar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
