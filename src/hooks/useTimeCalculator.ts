import { UseFormReset, UseFormSetFocus } from 'react-hook-form'

import { TIME_FORM } from '../types'
import { TIME } from '../components/timeCalculator/additional'

const useTimeCalculator = (
  time: TIME,
  setFocus: UseFormSetFocus<TIME_FORM>,
  reset: UseFormReset<TIME_FORM>,
) => {
  const isEmpty = !Object.values(time).some((v) => v !== '0')

  const addInterval = () => {
    setFocus('hh1')
    reset({ hh1: '', hh2: '', mm1: '', mm2: '' })
  }

  return () => {
    isEmpty ? setFocus('hh1') : addInterval()
  }
}

export { useTimeCalculator }
