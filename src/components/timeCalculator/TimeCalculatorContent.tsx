import { FC } from 'react'

import cn from './TimeCalculator.module.css'
import { TimeCalculatorBottom } from './TimeCalculatorBottom'
import { TimeInput } from '../UI/timeInput/TimeInput'
import { TimeSwitcher } from './TimeSwitcher'

const TimeCalculatorContent: FC = () => {
  return (
    <div className={cn['container']}>
      <div className={cn['calculator__inputs']}>
        <TimeInput />
        <TimeSwitcher />
        <TimeInput />
      </div>

      <TimeCalculatorBottom />
    </div>
  )
}

export { TimeCalculatorContent }
