import { ButtonHTMLAttributes, FC } from 'react'

import cn from './ButtonIcon.module.scss'
import { IconSvg } from '../IconSvg/IconSvg'
import { SPRITE_ICONS } from '../../../types'

interface P {
  iconName: SPRITE_ICONS
  iconClassName?: string
  buttonClassName?: string
}

const ButtonIcon: FC<P & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  iconName,
  iconClassName,
  buttonClassName,
  ...restProps
}) => {
  const cnButton = [cn['button'], buttonClassName ?? ''].join(' ')
  const cnIcon = [cn['icon'], iconClassName ?? ''].join(' ')

  return (
    <button className={cnButton} {...restProps}>
      <IconSvg supClassName={cnIcon} iconName={iconName} />
    </button>
  )
}

export { ButtonIcon }
