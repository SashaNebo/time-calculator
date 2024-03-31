import { FC, ReactNode } from 'react'

import cn from './GridLayout.module.css'

const GridLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={cn['grid']}>{children}</div>
}

export { GridLayout }
