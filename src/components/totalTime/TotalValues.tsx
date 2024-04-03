import { FC, useContext } from 'react'

import cn from './TotalTime.module.scss'
import { INTERVALS_CONTEXT } from '../../types'
import { summation } from './additional'
import { TimeIntervalsContext } from '../../context'

const TotalValues: FC = () => {
  const { intervals } = useContext(TimeIntervalsContext as INTERVALS_CONTEXT)
  const { hh, mm, fullMinutes } = summation(intervals)

  return (
    <div className={cn['total__values']}>
      <h2 className={cn['total__text']}>Total time:</h2>
      <h1 className={cn['total__h']}>
        {hh}h {mm}m
      </h1>
      <h2 className={cn['total__m']}>{fullMinutes}m</h2>
    </div>
  )
}

export { TotalValues }
