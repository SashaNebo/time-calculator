import { FC } from 'react'

import cn from './Sidebar.module.scss'
import { SidebarIntervals } from './SidebarIntervals'

const Sidebar: FC = () => {
  return (
    <div className={cn['sidebar']}>
      <div className={cn['time']}>
        <SidebarIntervals />
      </div>
    </div>
  )
}

export { Sidebar }
