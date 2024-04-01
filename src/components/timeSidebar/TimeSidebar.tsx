import { FC } from 'react'

import cn from './TimeSidebar.module.scss'
import { TimeList } from './TimeList'
import { TimeCreate } from './TimeCreate'

const TimeSidebar: FC = () => {
  return (
    <div className={cn['sidebar']}>
      <div className={cn['time']}>
        <TimeList />
        <TimeCreate />
      </div>
    </div>
  )
}

export { TimeSidebar }
