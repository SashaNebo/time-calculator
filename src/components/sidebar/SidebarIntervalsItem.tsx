import { FC, useEffect, useState } from 'react'

import cn from './Sidebar.module.scss'
import { TimeInput } from '../UI/timeInput/TimeInput'
import { ButtonIcon } from '../UI/buttonIcon/ButtonIcon'
import { INTERVAL, INTERVALS_STATE } from '../../types'

interface P {
  interval: INTERVAL
  setIntervals: INTERVALS_STATE['setIntervals']
}

const SidebarIntervalsItem: FC<P> = ({ interval, setIntervals }) => {
  const [{ hh, mm }, setValue] = useState({
    hh: interval.hh,
    mm: interval.mm,
  })

  const onChangeInterval = (e: React.ChangeEvent<HTMLInputElement>, key: 'hh' | 'mm') => {
    setValue((prevValue) => ({ ...prevValue, [key]: e.target.value }))
  }

  useEffect(() => {
    setIntervals({ ...interval, hh, mm }, 'edit')
  }, [hh, mm])

  return (
    <div className={cn['intervals-item']}>
      <TimeInput
        size='lg'
        propsHH={{
          defaultValue: hh,
          onChange: (e) => onChangeInterval(e, 'hh'),
        }}
        propsMM={{
          defaultValue: mm,
          onChange: (e) => onChangeInterval(e, 'mm'),
        }}
      />

      <div className={cn['intervals-item__buttons']}>
        <ButtonIcon onClick={() => setIntervals(interval, 'remove')} iconName='remove' />
      </div>
    </div>
  )
}

export { SidebarIntervalsItem }
