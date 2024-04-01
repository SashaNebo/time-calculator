import { FC, useState } from 'react'

import cn from './TimeCalculator.module.scss'

const TimeSwitcher: FC = () => {
  const [active, setActive] = useState(false)

  return (
    <div className={cn['switcher']}>
      <span
        onClick={() => setActive(() => false)}
        className={[cn['minus'], !active && cn['active']].join(' ')}>
        -
      </span>
      <span
        onClick={() => setActive(() => true)}
        className={[cn['plus'], active && cn['active']].join(' ')}>
        +
      </span>
    </div>
  )
}

export { TimeSwitcher }
