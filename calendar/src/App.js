import './App.css';

import { useState, useEffect } from 'react';

import { getMonth } from './common/common';
import Header from './components/Header/Header';
import Month from './components/Month/Month';
import SideBar from './components/SideBar/SideBar';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { appActions } from './store/appContext';
import EventModal from './components/EventModal/EventModal';


function App() {

  const monthIndex = useSelector(state => state.appContext.monthIndex);
  const currentMonthValue = useSelector(state => state.appContext.currentMonth);
  const showModal = useSelector(state => state.appContext.showModal);
  // console.log(monthIndex);
  const dispatch = useDispatch();

  const updateMonthIndex = () => {
    dispatch(appActions.setMonthIndex(monthIndex));
  };

  const updateCurrentMonth = () => {
    dispatch(appActions.setCurrentMonth(monthIndex));
  }

  // console.table(getMonth());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  
  // console.log('monthIndex', monthIndex);
  // console.log('currentMonth', currentMonth);

//TODO - check if this useEffect is neccessary
  useEffect(() => {
    updateCurrentMonth();
  }, [monthIndex]);

  return (
    <>
    {showModal && <EventModal />}
      <div className='wrapper-div'>
        <Header />
        <div className='wrapper-sidebar'>
          <SideBar />
          <Month month={currentMonthValue} />
        </div>
      </div>
    </>
  );
}

export default App;


//TODO
// exit on click outside and esc - modal - done
// improve styling - current date styling on main calendar - done
// improve modal styling
//add labels functionality
//Check current day styles on mini calendar
//check if we need hardcoded events in localStorage upon first load
//optional - clean up day on calendar with useEffect
//update labelcolor in sidebar - Labels