import { FC } from 'react'

import cn from './TimeCalculator.module.scss'

const TimeCalculatorBottom: FC = () => {
  return (
    <div className={cn['calculator__bottom']}>
      <div className={cn['calculator__values']}>
        <div className={cn['calculator__info']}>
          <h2 className={cn['calculator__info-text']}>In minutes:</h2>
          <h1 className={cn['calculator__info-value']}>201m</h1>
        </div>

        <div className={cn['calculator__info']}>
          <h2 className={cn['calculator__info-text']}>In hours:</h2>
          <h1 className={cn['calculator__info-value']}>4h 22m</h1>
        </div>
      </div>

      <button className={cn['calculator__button']}>okey</button>
    </div>
  )
}

export { TimeCalculatorBottom }
