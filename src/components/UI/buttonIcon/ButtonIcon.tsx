import { ButtonHTMLAttributes, FC } from 'react'

import cn from './ButtonIcon.module.scss'
import { SPRITE_ICONS } from '../../../types'
import { IconComponent } from '../IconComponent/IconComponent'

interface P {
  iconName: SPRITE_ICONS
  buttonClassName?: string
}

const ButtonIcon: FC<P & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  iconName,
  buttonClassName,
  ...restProps
}) => {
  const cnButton = [cn['button'], buttonClassName ?? ''].join(' ')

  return (
    <button className={cnButton} {...restProps}>
      <IconComponent iconName={iconName} />
    </button>
  )
}

export { ButtonIcon }
