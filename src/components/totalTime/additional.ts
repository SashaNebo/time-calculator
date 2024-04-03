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
