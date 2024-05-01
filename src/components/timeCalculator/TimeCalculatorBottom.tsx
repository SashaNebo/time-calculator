import { FC, useContext } from 'react'
import { UseFormReset, UseFormSetFocus } from 'react-hook-form'

import cn from './TimeCalculator.module.scss'
import { TIME, summation } from './additional'
import { ButtonIcon } from '../UI/buttonIcon/ButtonIcon'
import { INTERVALS_CONTEXT, TIME_FORM } from '../../types'
import { TimeIntervalsContext } from '../../context'

interface P {
  submit: () => void
  time: TIME
  reset: UseFormReset<TIME_FORM>
  setFocus: UseFormSetFocus<TIME_FORM>
}

const TimeCalculatorBottom: FC<P> = ({ submit, time, reset, setFocus }) => {
  const { intervals } = useContext(TimeIntervalsContext as INTERVALS_CONTEXT)
  const { hh, mm, fullMinutes } = summation(intervals)

  return (
    <div className={cn['calculator__bottom']}>
      <div className={cn['calculator__values']}>

      <div className={cn['calculator__info']}>
          <h2 className={cn['calculator__info-text']}>Input time:</h2>
          <h1 className={[cn['calculator__info-value'], cn['hh']].join(' ')}>
            {time.hh}h {time.mm}m <span className={cn['min']}>{`(${time.fullMinutes}m)`}</span>
          </h1>
        </div>

        <div className={cn['calculator__info']}>
          <h2 className={cn['calculator__info-text']}>Total time:</h2>
          <h1 className={[cn['calculator__info-value'], cn['hh']].join(' ')}>
            {hh}h {mm}m <span className={cn['min']}>{`(${fullMinutes}m)`}</span>
          </h1>
        </div>
      </div>

      <div className={cn['calculator__buttons']}>
        <ButtonIcon
          onClick={submit}
          iconName='check'
          className={cn['calculator__btn']}
        />

        <ButtonIcon
          onClick={() => {
            setFocus('hh1')
            reset({ hh1: '', hh2: '', mm1: '', mm2: '' })
          }}
          iconName='remove'
          className={cn['calculator__btn']}
        />
      </div>
    </div>
  )
}

export { TimeCalculatorBottom }
