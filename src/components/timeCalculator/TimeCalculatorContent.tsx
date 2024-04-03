import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import cn from './TimeCalculator.module.scss'
import { TimeCalculatorBottom } from './TimeCalculatorBottom'
import { TimeInput } from '../UI/timeInput/TimeInput'
import { TimeSwitcher } from './TimeSwitcher'
import { TIME_FORM } from '../../types'
import { TIME, calculationTimeInterval, getTimeForm, registering } from './additional'
import { useTimeCalculator } from '../../hooks/useTimeCalculator'

const TimeCalculatorContent: FC = () => {
  const { register, setFocus, watch, reset } = useForm<TIME_FORM>()
  const [calcOperation, setCalcOperation] = useState<'minus' | 'plus'>('minus')
  const { hh1Reg, hh2Reg, mm1Reg, mm2Reg } = registering(register)
  const timeForm = getTimeForm(watch)
  const time: TIME = calculationTimeInterval(timeForm, calcOperation)
  const submit = useTimeCalculator(time, setFocus, reset)
  const onKeyDownHandler = ({ code }: { code: string }) => code === 'Enter' && submit()

  return (
    <div className={cn['container']}>
      <div className={cn['calculator__inputs']}>
        <TimeInput
          propsHH={{ ...hh1Reg, onKeyDown: onKeyDownHandler, autoFocus: true }}
          propsMM={{ ...mm1Reg, onKeyDown: onKeyDownHandler }}
        />
        <TimeSwitcher calcOperation={calcOperation} setCalcOperation={setCalcOperation} />
        <TimeInput
          propsHH={{ ...hh2Reg, onKeyDown: onKeyDownHandler }}
          propsMM={{ ...mm2Reg, onKeyDown: onKeyDownHandler }}
        />
      </div>
      <TimeCalculatorBottom submit={submit} time={time} />
    </div>
  )
}

export { TimeCalculatorContent }
