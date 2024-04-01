import { FC } from 'react'

import cn from './AppContent.module.scss'
import { TotalTime } from '../totalTime/TotalTime'
import { TimeCalculator } from '../timeCalculator/TimeCalculator'
import { Sidebar } from '../sidebar/Sidebar'

const AppContent: FC = () => {
  return (
    <div className={cn['grid']}>
      <TotalTime />
      <TimeCalculator />
      <Sidebar />
    </div>
  )
}

export { AppContent }
