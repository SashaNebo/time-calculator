import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import cn from './TimeCalculator.module.scss'
import { TimeCalculatorBottom } from './TimeCalculatorBottom'
import { TimeInput } from '../UI/timeInput/TimeInput'
import { TimeSwitcher } from './TimeSwitcher'
import { TIME_FORM } from '../../types'
import { useTimeCalculator } from '../../hooks/useTimeCalculator'
import { TIME, getTimeForm, registering } from './additional'
import { useCalculation } from '../../hooks/useCalculation'

const TimeCalculatorContent: FC = () => {
  const { register, setFocus, watch, reset } = useForm<TIME_FORM>()
  const [calcOperation, setCalcOperation] = useState<'minus' | 'plus'>('minus')
  const { hh1Reg, hh2Reg, mm1Reg, mm2Reg } = registering(register)
  const timeForm = getTimeForm(watch)

  const time: TIME = useCalculation(timeForm, calcOperation)
  const submit = useTimeCalculator(time, setFocus, reset)

  return (
    <div className={cn['container']}>
      <div className={cn['calculator__inputs']}>
        <TimeInput propsHH={{ ...hh1Reg, autoFocus: true }} propsMM={{ ...mm1Reg }} />
        <TimeSwitcher calcOperation={calcOperation} setCalcOperation={setCalcOperation} />
        <TimeInput propsHH={{ ...hh2Reg }} propsMM={{ ...mm2Reg }} />
      </div>

      <TimeCalculatorBottom submit={submit} time={time} />
    </div>
  )
}

export { TimeCalculatorContent }
