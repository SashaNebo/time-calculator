import { FC } from 'react'

import cn from './TimeSidebar.module.scss'
import { TimeSidebarList } from './TimeSidebarList'

const TimeSidebar: FC = () => {
  return (
    <div className={cn['sidebar']}>
      <div className={cn['time']}>
        <div className={cn['time-list']}>
          <div className={cn['time-list__wrapper']}>
            <div className={cn['container']}>
              <h2 className={cn['time-list__title']}>Time list: </h2>
              <TimeSidebarList />
            </div>
          </div>
        </div>
        <div className={cn['time-create']}></div>
      </div>
    </div>
  )
}

export { TimeSidebar }
