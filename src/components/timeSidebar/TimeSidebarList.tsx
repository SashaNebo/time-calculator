import { FC } from 'react'

import cn from './TimeSidebar.module.scss'
import { TimeInput } from '../UI/timeInput/TimeInput'
import { ButtonIcon } from '../UI/buttonIcon/ButtonIcon'

const TimeSidebarList: FC = () => {
  return (
    <div className={cn['list']}>
      {[...new Array(10)].map((_, i) => (
        <div key={i} className={cn['list__item']}>
          <TimeInput size='lg' />

          <div className={cn['list__item-buttons']}>
            <ButtonIcon iconName='edit' />
            <ButtonIcon iconName='remove' />
          </div>
        </div>
      ))}
    </div>
  )
}

export { TimeSidebarList }
