import { FC } from 'react'

import cn from './IconSvg.module.scss'
import { SPRITE_ICONS } from '../../../types'

interface P {
  iconName: SPRITE_ICONS
  supClassName?: string
}

const sprite = '/time-calculator/src/assets/images/sprite.svg'

const IconSvg: FC<P> = ({ iconName, supClassName }) => (
  <svg className={[supClassName, cn['icon']].join(' ')}>
    <use href={`${sprite}#${iconName}`}></use>
  </svg>
)

export { IconSvg }
