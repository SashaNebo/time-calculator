import { FC } from 'react'

import cn from './Sidebar.module.scss'
import { SidebarIntervals } from './SidebarIntervals'
import { SidebarCreate } from './SidebarCreate'

const Sidebar: FC = () => {
  return (
    <div className={cn['sidebar']}>
      <div className={cn['time']}>
        <SidebarIntervals />
        <SidebarCreate />
      </div>
    </div>
  )
}

export { Sidebar }
