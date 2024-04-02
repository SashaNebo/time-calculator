import { FC } from 'react'

import cn from './ButtonIcon.module.scss'
import { IconSvg } from '../IconSvg/IconSvg'
import { SPRITE_ICONS } from '../../../types'

interface P {
  iconName: SPRITE_ICONS
  iconClassName?: string
  buttonClassName?: string
}

const ButtonIcon: FC<P> = ({ iconName, iconClassName, buttonClassName }) => {
  const cnButton = [cn['button'], buttonClassName ?? ''].join(' ')
  const cnIcon = [cn['icon'], iconClassName ?? ''].join(' ')

  return (
    <button className={cnButton}>
      <IconSvg supClassName={cnIcon} iconName={iconName} />
    </button>
  )
}

export { ButtonIcon }
