import { FC } from 'react'

import cn from './TimeInput.module.scss'

interface P {
  size?: 'xl' | 'lg'
}

const TimeInput: FC<P> = ({ size = 'xl' }) => {
  const cnTimeInput = [cn['time-input'], cn[size]].join(' ')
  const cnInput = [cn['input'], cn[size]].join(' ')

  return (
    <div className={cnTimeInput}>
      <input className={cnInput} type='number' placeholder='HH' />
      <input className={cnInput} type='number' placeholder='MM' />
    </div>
  )
}

export { TimeInput }
