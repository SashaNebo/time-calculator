import { FC, useContext } from 'react'
import { useForm } from 'react-hook-form'

import cn from './Sidebar.module.scss'
import { TimeInput } from '../UI/timeInput/TimeInput'
import { ButtonIcon } from '../UI/buttonIcon/ButtonIcon'
import { TimeIntervalsContext } from '../../context'
import { INTERVAL, INTERVALS_CONTEXT } from '../../types'

const SidebarCreate: FC = () => {
  const { setIntervals } = useContext(TimeIntervalsContext as INTERVALS_CONTEXT)
  const { register, reset, setFocus, watch } = useForm<{ hh: string; mm: string }>()

  const hhReg = { ...register('hh') }
  const mmReg = { ...register('mm') }
  const time = { hh: watch('hh') || '', mm: watch('mm') || '' }

  const createInterval = (time: { hh: string; mm: string }) => {
    const isEmpty = !Object.values(time).some((t) => +t !== 0)

    const create = () => {
      const interval: INTERVAL = {
        id: String(Date.now()),
        hh: String(Math.abs(+time.hh)),
        mm: String(Math.abs(+time.mm)),
      }

      setIntervals(interval, 'add')
      setFocus('hh')
      reset({ hh: '', mm: '' })
    }

    isEmpty ? setFocus('hh') : create()
  }

  const onKeyDownHandler = ({ code }: { code: string }) => {
    code === 'Enter' && createInterval(time)
  }

  return (
    <div className={cn['create']}>
      <div className={cn['create__wrapper']}>
        <div className={cn['container']}>
          <h2 className={cn['create__title']}>Create interval</h2>
          <div className={cn['create__block']}>
            <TimeInput
              propsHH={{ ...hhReg, onKeyDown: onKeyDownHandler }}
              propsMM={{ ...mmReg, onKeyDown: onKeyDownHandler }}
            />
            <div className={cn['create__buttons']}>
              <ButtonIcon
                onClick={() => createInterval(time)}
                iconClassName={cn['create__icon']}
                iconName='check'
              />
              <ButtonIcon
                onClick={() => {
                  setFocus('hh')
                  reset({ hh: '', mm: '' })
                }}
                iconClassName={cn['create__icon']}
                iconName='remove'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SidebarCreate }
