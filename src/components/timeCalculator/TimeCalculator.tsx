import { FC } from 'react'

import cn from './TimeCalculator.module.css'
import { TimeCalculatorContent } from './TimeCalculatorContent'

const TimeCalculator: FC = () => {
  return (
    <div className={cn['calculator']}>
      <div className={cn['wrapper']}>
        <TimeCalculatorContent />
      </div>
    </div>
  )
}

export { TimeCalculator }
