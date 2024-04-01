import { FC } from 'react'

import cn from './TimeCalculator.module.scss'
import { TimeCalculatorContent } from './TimeCalculatorContent'

const TimeCalculator: FC = () => {
  return (
    <main className={cn['calculator']}>
      <div className={cn['wrapper']}>
        <TimeCalculatorContent />
      </div>
    </main>
  )
}

export { TimeCalculator }
