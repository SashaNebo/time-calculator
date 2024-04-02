import { TIME } from '../components/timeCalculator/additional'
import { TIME_FORM } from '../types'

const useCalculation = (timeForm: TIME_FORM, calcOperation: 'minus' | 'plus'): TIME => {
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

export { useCalculation }
