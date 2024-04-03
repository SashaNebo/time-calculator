import { FC } from 'react'

import cn from './TotalTime.module.scss'
import { TotalValues } from './TotalValues'

const TotalTime: FC = () => {
  return (
    <div className={cn['total']}>
      <div className={cn['wrapper']}>
        <div className={cn['container']}>
          <TotalValues />
        </div>
      </div>
    </div>
  )
}

export { TotalTime }
