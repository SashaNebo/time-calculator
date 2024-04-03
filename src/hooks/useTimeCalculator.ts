import { useContext } from 'react'
import { UseFormReset, UseFormSetFocus } from 'react-hook-form'

import { TimeIntervalsContext } from '../context'
import { INTERVALS_CONTEXT, TIME_FORM } from '../types'
import { TIME } from '../components/timeCalculator/additional'

const useTimeCalculator = (
  time: TIME,
  setFocus: UseFormSetFocus<TIME_FORM>,
  reset: UseFormReset<TIME_FORM>,
) => {
  const { setIntervals } = useContext(TimeIntervalsContext as INTERVALS_CONTEXT)

  return () => {
    const isEmpty = !Object.values(time).some((v) => v !== '0')

    const addInterval = () => {
      const interval = { id: String(Date.now()), hh: time.hh, mm: time.mm }
      setIntervals(interval, 'add')
      setFocus('hh1')
      reset({ hh1: '', hh2: '', mm1: '', mm2: '' })
    }

    isEmpty ? setFocus('hh1') : addInterval()
  }
}

export { useTimeCalculator }
