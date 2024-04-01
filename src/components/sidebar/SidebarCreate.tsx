import { FC } from 'react'

import cn from './Sidebar.module.scss'
import { TimeInput } from '../UI/timeInput/TimeInput'
import { ButtonIcon } from '../UI/buttonIcon/ButtonIcon'

const SidebarCreate: FC = () => {
  return (
    <div className={cn['create']}>
      <div className={cn['create__wrapper']}>
        <div className={cn['container']}>
          <h2 className={cn['create__title']}>Create interval</h2>
          <div className={cn['create__block']}>
            <TimeInput />
            <div className={cn['create__buttons']}>
              <ButtonIcon iconClassName={cn['create__icon']} iconName='check' />
              <ButtonIcon iconClassName={cn['create__icon']} iconName='remove' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SidebarCreate }
