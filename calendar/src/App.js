import './App.css';

import { useEffect } from 'react';

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
  const dispatch = useDispatch();

  const updateCurrentMonth = () => {
    dispatch(appActions.setCurrentMonth(monthIndex));
  }

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
