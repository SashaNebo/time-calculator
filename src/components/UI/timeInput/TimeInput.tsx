import { FC } from 'react'

import cn from './TimeInput.module.scss'
import { TIME_INPUT } from './types'

const TimeInput: FC<TIME_INPUT> = ({ size = 'xl', propsHH, propsMM }) => {
  const cnTimeInput = [cn['time-input'], cn[size]].join(' ')
  const cnInput = [cn['input'], cn[size]].join(' ')

  return (
    <div className={cnTimeInput}>
      <input className={cnInput} type='number' placeholder='HH' {...propsHH} />
      <input className={cnInput} type='number' placeholder='MM' {...propsMM} />
    </div>
  )
}

export { TimeInput }
