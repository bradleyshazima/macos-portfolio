import React from 'react';
import { desktopIcons } from '../constants';
import {
  figmaIcon,
  githubIcon,
  messagesIcon,
  photosIcon,
  terminalIcon,
  calculatorIcon,
  finderIcon,
  mimestreamIcon,
  musicIcon,
  safariIcon,
  settingsIcon,
  siriIcon,
} from '../appIcons';

const DesktopArea = () => {
  const getIconImage = (iconName) => {
    if (iconName === 'figma') return figmaIcon;
    if (iconName === 'github') return githubIcon;
    if (iconName === 'messages') return messagesIcon;
    if (iconName === 'photos') return photosIcon;
    if (iconName === 'terminal') return terminalIcon;
    if (iconName === 'calculator') return calculatorIcon;
    if (iconName === 'finder') return finderIcon;
    if (iconName === 'mimestream') return mimestreamIcon;
    if (iconName === 'music') return musicIcon;
    if (iconName === 'safari') return safariIcon;
    if (iconName === 'settings') return settingsIcon;
    if (iconName === 'siri') return siriIcon;
    return null;
  };

  return (
    <section className='w-full h-[calc(100vh-24px)] minmax-w-100'>
      <div className='h-full bg-slate-500 w-[276px] px-8 pt-4 pb-24 flex flex-col flex-wrap items-start justify-start gap-3 text-white'>
        {desktopIcons.map((icon, index) => (
          <div key={index} className='w-[100px] h-[100px] p-1 hover:bg-[#ffffff33] rounded ho flex flex-col items-center justify-between'>
            <img src={getIconImage(icon.name.toLowerCase())} className='h-[76px] w-[76px]' alt='' />
            <p className='text-sm'>{icon.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesktopArea;
