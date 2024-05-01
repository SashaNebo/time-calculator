import { FC } from 'react'

import cn from './AppContent.module.scss'
import { TimeCalculator } from '../timeCalculator/TimeCalculator'
import { Sidebar } from '../sidebar/Sidebar'

const AppContent: FC = () => {
  return (
    <div className={cn['grid']}>
      <TimeCalculator />
      <Sidebar />
    </div>
  )
}

export { AppContent }
