import { UseFormRegister, UseFormRegisterReturn, UseFormWatch } from 'react-hook-form'

import { TIME_FORM } from '../../types'

export interface TIME {
  hh: string
  mm: string
  fullMinutes: string
}

interface REGISTER_FIELDS {
  hh1Reg: UseFormRegisterReturn<'hh1'>
  hh2Reg: UseFormRegisterReturn<'hh2'>
  mm1Reg: UseFormRegisterReturn<'mm1'>
  mm2Reg: UseFormRegisterReturn<'mm2'>
}

export const registering = (register: UseFormRegister<TIME_FORM>) => {
  return {
    hh1Reg: { ...register('hh1') },
    hh2Reg: { ...register('hh2') },
    mm1Reg: { ...register('mm1') },
    mm2Reg: { ...register('mm2') },
  } as REGISTER_FIELDS
}

export const getTimeForm = (watch: UseFormWatch<TIME_FORM>) => ({
  hh1: watch('hh1') || '',
  hh2: watch('hh2') || '',
  mm1: watch('mm1') || '',
  mm2: watch('mm2') || '',
})

export const calculationTimeInterval = (
  timeForm: TIME_FORM,
  calcOperation: 'minus' | 'plus',
): TIME => {
  const isEmpty = !Object.values(timeForm).some((v) => v !== '')
  if (isEmpty) return { hh: '0', mm: '0', fullMinutes: '0' }

  const { hh1, hh2, mm1, mm2 } = timeForm
  const time1 = Number(hh1) * 60 + Number(mm1)
  const time2 = Number(hh2) * 60 + Number(mm2)

  const timeInMinutes = {
    minus: () => Math.abs(time1 - time2),
    plus: () => Math.abs(time1 + time2),
  }[calcOperation]()

  const hh = Math.floor(timeInMinutes / 60)
  const mm = timeInMinutes - hh * 60

  return {
    hh: String(hh),
    mm: String(mm),
    fullMinutes: String(timeInMinutes),
  }
}

import { INTERVAL } from '../../types'

export const summation = (intervals: INTERVAL[]) => {
  const fullMinutes = intervals.reduce(
    (acc, interval) => (acc += +interval.hh * 60 + +interval.mm),
    0,
  )

  const hh = Math.floor(fullMinutes / 60)
  const mm = fullMinutes - hh * 60

  return {
    hh,
    mm,
    fullMinutes,
  }
}
