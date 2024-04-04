import { FC } from 'react'

import cn from './IconSvg.module.scss'
import sprite from '../../../assets/images/sprite.svg'
import { SPRITE_ICONS } from '../../../types'

interface P {
  iconName: SPRITE_ICONS
  supClassName?: string
}

const IconSvg: FC<P> = ({ iconName, supClassName }) => (
  <svg className={[supClassName, cn['icon']].join(' ')}>
    <use href={`${sprite}#${iconName}`}></use>
  </svg>
)

export { IconSvg }
