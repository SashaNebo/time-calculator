import { FC } from 'react'

import cn from './TimeSidebar.module.scss'
import { TimeInput } from '../UI/timeInput/TimeInput'
import { ButtonIcon } from '../UI/buttonIcon/ButtonIcon'

const TimeCreate: FC = () => {
  return (
    <div className={cn['time-create']}>
      <div className={cn['time-create__wrapper']}>
        <div className={cn['container']}>
          <h2 className={cn['time-create__title']}>Create time</h2>
          <div className={cn['time-create__block']}>
            <TimeInput />
            <div className={cn['time-create__buttons']}>
              <ButtonIcon iconClassName={cn['time-create__icon']} iconName='check' />
              <ButtonIcon iconClassName={cn['time-create__icon']} iconName='remove' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { TimeCreate }
