import { FC } from 'react'

import { AppContent } from './components/appContent/AppContent'
import { TimeIntervalsContext } from './context'
import { useTimeIntervals } from './hooks/useTimeIntervals'

const App: FC = () => {
  const { intervals, setIntervals } = useTimeIntervals()

  return (
    <TimeIntervalsContext.Provider value={{ intervals, setIntervals }}>
      <div className='app'>
        <AppContent />
      </div>
    </TimeIntervalsContext.Provider>
  )
}

export { App }
