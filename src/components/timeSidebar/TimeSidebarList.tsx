import { FC } from 'react'

import cn from './TimeSidebar.module.scss'
import { TimeInput } from '../UI/timeInput/TimeInput'
import { IconSvg } from '../UI/IconSvg/IconSvg'

const TimeSidebarList: FC = () => {
  return (
    <div className={cn['list']}>
      {[...new Array(10)].map((_, i) => (
        <div key={i} className={cn['list__item']}>
          <TimeInput size='lg' />

          <div className={cn['list__item-buttons']}>
            <button className={cn['list__item-btn']}>
              <IconSvg supClassName={cn['list__item-icon']} iconName='edit' />
            </button>

            <button className={cn['list__item-btn']}>
              <IconSvg supClassName={cn['list__item-icon']} iconName='remove' />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export { TimeSidebarList }
