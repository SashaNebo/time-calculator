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
