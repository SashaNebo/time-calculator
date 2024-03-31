import { FC } from 'react'

import cn from './TimeInput.module.css'

const TimeInput: FC = () => {
  return (
    <div className={cn['time-input']}>
      <input className={cn['input']} type='number' placeholder='HH' />
      <input className={cn['input']} type='number' placeholder='MM' />
    </div>
  )
}

export { TimeInput }
