import React from 'react'

import { TopBar, Dock, DesktopArea } from '../components'

const Desktop = () => {
  return (
    <main className='w-full h-full flex flex-col items-center overflow-hidden bg-center bg-cover' id='main'>
      <TopBar />
      <DesktopArea />
      <Dock />
    </main>
  )
}

export default Desktop