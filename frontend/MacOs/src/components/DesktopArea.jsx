import React from 'react'

import { figmaIcon, githubIcon, messagesIcon, notesIcon, photosIcon, terminalIcon } from '../appIcons'

const DesktopArea = () => {
  return (
    <section className='w-full h-[calc(100vh-24px)] bg-slate-400 px-8 py-4 grid grid-cols-auto-fill gap-5 minmax-w-100'>
        <div className='w-[100px] h-[100px] flex items-center justify-center'><img src={figmaIcon} className='h-[76px] w-[76px]' alt="" /></div>
        <div className='w-[100px] h-[100px] flex items-center justify-center'><img src={githubIcon} className='h-[76px] w-[76px]' alt="" /></div>
        <div className='w-[100px] h-[100px] flex items-center justify-center'><img src={messagesIcon} className='h-[76px] w-[76px]' alt="" /></div>
        <div className='w-[100px] h-[100px] flex items-center justify-center'><img src={notesIcon} className='h-[76px] w-[76px]' alt="" /></div>
        <div className='w-[100px] h-[100px] flex items-center justify-center'><img src={photosIcon} className='h-[76px] w-[76px]' alt="" /></div>
        <div className='w-[100px] h-[100px] flex items-center justify-center'><img src={terminalIcon} className='h-[76px] w-[76px]' alt="" /></div>
    </section>
  )
}

export default DesktopArea