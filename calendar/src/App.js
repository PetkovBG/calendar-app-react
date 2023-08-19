import './App.css';

import { useState, useEffect } from 'react';

import { getMonth } from './common/common';
import Header from './components/Header/Header';
import Month from './components/Month/Month';
import SideBar from './components/SideBar/SideBar';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { appActions } from './store/appContext';


function App() {

  const monthIndex = useSelector(state => state.appContext.monthIndex);
  const dispatch = useDispatch();

  const updateMonthIndex = () => {
    dispatch(appActions.setMonthIndex(monthIndex));
  }

  // console.table(getMonth());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  

  useEffect(() => {
    updateMonthIndex();
  }, [monthIndex]);

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
