import { FC } from 'react'

import { GridLayout } from './components/gridLayout/GridLayout'
import { TotalTime } from './components/totalTime/TotalTime'
import { TimeSidebar } from './components/timeSidebar/TimeSidebar'
import { TimeCalculator } from './components/timeCalculator/TimeCalculator'

const App: FC = () => {
  return (
    <div className='app'>
      <GridLayout>
        <TotalTime />
        <TimeCalculator />
        <TimeSidebar />
      </GridLayout>
    </div>
  )
}

export { App }
