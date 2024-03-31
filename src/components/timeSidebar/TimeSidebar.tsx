import { FC } from 'react'

import cn from './TimeSidebar.module.css'

const TimeSidebar: FC = () => {
  return (
    <div className={cn['sidebar']}>
      <h1>TimeSidebar</h1>
    </div>
  )
}

export { TimeSidebar }
