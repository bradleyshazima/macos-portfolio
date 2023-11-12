import React, { useState, useEffect } from 'react'

import { apple, macSwitch, battery, wifi, darkApple } from '../assets'

const TopBar = () => {

    const [date, setDate] = useState(new Date());
    const getFormattedDate = () => {
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
        const currentDate = new Date();
        const currentWeekday = weekdays[currentDate.getDay()];
        const currentMonth = months[currentDate.getMonth()];
        const currentDateNumber = currentDate.getDate();
        const currentHour = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes();
        const amPm = currentHour >= 12 ? 'PM' : 'AM';

  return (
    <div className='top-0 left-0 w-[100vw] h-6 bg-[#ffffff80] flex items-center justify-between px-3 py-0 overflow-hidden'>
        <div className="menuBars">
            <ul className='flex items-center justify-center h-full px-2 font-medium text-sm text-[#000000c2] mix-blend-hard-light tracking-[-0.35px] gap-4'>
                <li><img src={darkApple} alt="apple-logo"/></li>
                <li><div className="finder font-bold">Finder</div></li>
                <li><div className="file">File</div></li>
                <li><div className="edit">Edit</div></li>
                <li><div className="view">View</div></li>
                <li><div className="go">Go</div></li>
                <li><div className="window">Window</div></li>
                <li><div className="help">Help</div></li>
            </ul>
        </div>

        <div className="menuItems">
            <ul className='h-full flex items-center justify-center gap-4 text-sm font-medium px-2 text-[#000000c2] mix-blend-hard-light tracking-[-0.35px]'>
                <li className='h-full'><img src={wifi} alt="wifi icon" /></li>
                <li className='h-full'><img src={battery} alt="battery icon" /></li>
                <li className='h-full'><img src={macSwitch} alt="switch icon" /></li>
                <li className='h-full'>
                    <div className="dateTime flex gap-4">
                        <div className="date">{`${currentWeekday} ${currentMonth} ${currentDateNumber}`}</div>
                        <div className="time">{`${currentHour % 12 || 12}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes} ${amPm}`}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
};

useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
 }, []);

 return (
    <div className="dateTime flex">
      {getFormattedDate()}
    </div>
 );
}

export default TopBar