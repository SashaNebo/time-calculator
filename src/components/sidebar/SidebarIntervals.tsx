import { FC } from 'react'

import cn from './Sidebar.module.scss'
import { SidebarIntervalsList } from './SidebarIntervalsList'

const SidebarIntervals: FC = () => {
  return (
    <div className={cn['intervals']}>
      <div className={cn['intervals__wrapper']}>
        <div className={cn['container']}>
          <h2 className={cn['intervals__title']}>Time intervals </h2>
          <SidebarIntervalsList />
        </div>
      </div>
    </div>
  )
}

export { SidebarIntervals }
