import React from 'react'

import { figmaIcon, githubIcon, messagesIcon, notesIcon, photosIcon, terminalIcon, trashIcon } from '../appIcons';

const Dock = () => {
  return (
    <div className='h-[92px] flex items-center absolute z-50 bottom-1 bg-[#ffffff33] backdrop-blur-xl rounded-3xl border-[#ffffff33] border'>
        <ul className="dockIcons flex px-2 items-center justify-center h-full">
            <li className="h-[76px] w-[76px]"><img src={figmaIcon} alt="figma Icon" /></li>
            <li className="h-[76px] w-[76px]"><img src={githubIcon} alt="github Icon" /></li>
            <li className="h-[76px] w-[76px]"><img src={terminalIcon} alt="terinal Icon" /></li>
            <li className="h-[76px] w-[76px]"><img src={notesIcon} alt="notes Icon" /></li>
            <li className='separator'></li>
            <li><img src={trashIcon} alt="trashicon" /></li>
        </ul>
    </div>
  )
};

export default Dock