import { FC, useContext } from 'react'

import cn from './Sidebar.module.scss'
import { SidebarIntervalsItem } from './SidebarIntervalsItem'
import { TimeIntervalsContext } from '../../context'
import { INTERVALS_CONTEXT } from '../../types'

const SidebarIntervalsList: FC = () => {
  const { intervals, setIntervals } = useContext(TimeIntervalsContext as INTERVALS_CONTEXT)

  return (
    <div className={cn['intervals-list']}>
      {intervals.map((interval) => (
        <SidebarIntervalsItem key={interval.id} interval={interval} setIntervals={setIntervals} />
      ))}
    </div>
  )
}

export { SidebarIntervalsList }
