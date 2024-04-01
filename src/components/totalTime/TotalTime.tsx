import { FC } from 'react'

import cn from './TotalTime.module.scss'

const TotalTime: FC = () => {
  return (
    <div className={cn['total']}>
      <div className={cn['wrapper']}>
        <div className={cn['container']}>
          <div className={cn['total__values']}>
            <h2 className={cn['total__text']}>Total time:</h2>
            <h1 className={cn['total__h']}>12h 15m</h1>
            <h2 className={cn['total__m']}>550m</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export { TotalTime }
