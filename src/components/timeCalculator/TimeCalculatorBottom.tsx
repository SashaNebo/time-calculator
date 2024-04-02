import { FC } from 'react'

import cn from './TimeCalculator.module.scss'
import { TIME } from './additional'

interface P {
  submit: () => void
  time: TIME
}

const TimeCalculatorBottom: FC<P> = ({ submit, time }) => {
  return (
    <div className={cn['calculator__bottom']}>
      <div className={cn['calculator__values']}>
        <div className={cn['calculator__info']}>
          <h2 className={cn['calculator__info-text']}>In minutes:</h2>
          <h1 className={cn['calculator__info-value']}> {time.fullMinutes}m</h1>
        </div>

        <div className={cn['calculator__info']}>
          <h2 className={cn['calculator__info-text']}>In hours:</h2>
          <h1 className={cn['calculator__info-value']}>
            {time.hh}h {time.mm}m
          </h1>
        </div>
      </div>

      <button onClick={submit} className={cn['calculator__button']}>
        okey
      </button>
    </div>
  )
}

export { TimeCalculatorBottom }
