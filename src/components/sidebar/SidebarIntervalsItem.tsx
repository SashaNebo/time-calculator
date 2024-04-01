import { FC } from 'react'

import cn from './Sidebar.module.scss'
import { TimeInput } from '../UI/timeInput/TimeInput'
import { ButtonIcon } from '../UI/buttonIcon/ButtonIcon'

const SidebarIntervalsItem: FC = () => {
  return (
    <div className={cn['intervals-item']}>
      <TimeInput size='lg' />

      <div className={cn['intervals-item__buttons']}>
        <ButtonIcon iconName='edit' />
        <ButtonIcon iconName='remove' />
      </div>
    </div>
  )
}

export { SidebarIntervalsItem }
