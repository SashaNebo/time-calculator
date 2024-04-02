import { FC } from 'react'

import cn from './TimeCalculator.module.scss'

interface P {
  calcOperation: 'minus' | 'plus'
  setCalcOperation: React.Dispatch<React.SetStateAction<'minus' | 'plus'>>
}

const TimeSwitcher: FC<P> = ({ calcOperation, setCalcOperation }) => {
  return (
    <div className={cn['switcher']}>
      <span
        onClick={() => setCalcOperation('minus')}
        className={[cn['minus'], calcOperation === 'minus' ? cn['active'] : ''].join(' ')}>
        -
      </span>
      <span
        onClick={() => setCalcOperation('plus')}
        className={[cn['plus'], calcOperation === 'plus' ? cn['active'] : ''].join(' ')}>
        +
      </span>
    </div>
  )
}

export { TimeSwitcher }
