import { FC } from 'react'

import cn from './IconSvg.module.scss'
import sprite from '../../../assets/images/sprite.svg'

interface P {
  iconName: 'edit' | 'remove'
  supClassName?: string
}

const IconSvg: FC<P> = ({ iconName, supClassName }) => (
  <svg className={[cn['icon'], supClassName].join(' ')}>
    <use href={`${sprite}#${iconName}`}></use>
  </svg>
)

export { IconSvg }
