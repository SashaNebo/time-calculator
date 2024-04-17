import { FC } from 'react'
import { UseFormReset, UseFormSetFocus } from 'react-hook-form'

import cn from './TimeCalculator.module.scss'
import { TIME } from './additional'
import { ButtonIcon } from '../UI/buttonIcon/ButtonIcon'
import { TIME_FORM } from '../../types'

interface P {
  submit: () => void
  time: TIME
  reset: UseFormReset<TIME_FORM>
  setFocus: UseFormSetFocus<TIME_FORM>
}

const TimeCalculatorBottom: FC<P> = ({ submit, time, reset, setFocus }) => {
  return (
    <div className={cn['calculator__bottom']}>
      <div className={cn['calculator__values']}>
        <div className={cn['calculator__info']}>
          <h2 className={cn['calculator__info-text']}>In minutes:</h2>
          <h1 className={cn['calculator__info-value']}> {time.fullMinutes}m</h1>
        </div>

        <div className={cn['calculator__info']}>
          <h2 className={cn['calculator__info-text']}>In hours:</h2>
          <h1 className={[cn['calculator__info-value'], cn['hh']].join(' ')}>
            {time.hh}h {time.mm}m
          </h1>
        </div>
      </div>

      <div className={cn['calculator__buttons']}>
        <ButtonIcon onClick={submit} iconName='check' className={cn['calculator__btn']} />

        <ButtonIcon
          onClick={() => {
            setFocus('hh1')
            reset({ hh1: '', hh2: '', mm1: '', mm2: '' })
          }}
          iconName='remove'
          className={cn['calculator__btn']}
        />
      </div>
    </div>
  )
}

export { TimeCalculatorBottom }
