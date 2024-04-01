import { FC } from 'react'

import cn from './Sidebar.module.scss'
import { SidebarIntervalsItem } from './SidebarIntervalsItem'

const SidebarIntervalsList: FC = () => {
  return (
    <div className={cn['intervals-list']}>
      {[...new Array(10)].map((_, i) => (
        <SidebarIntervalsItem key={i} />
      ))}
    </div>
  )
}

export { SidebarIntervalsList }
