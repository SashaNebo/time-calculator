import { useState } from 'react'
import { INTERVAL } from '../types'

const useTimeIntervals = () => {
  const [intervals, setIntervals] = useState<INTERVAL[]>([])

  const setTimeIntervals = (interval: INTERVAL, action: 'add' | 'remove' | 'edit') => {
    const addInterval = () => setIntervals((prevIntervals) => [...prevIntervals, interval])

    const removeInterval = () =>
      setIntervals((prevIntervals) => prevIntervals.filter((int) => int.id !== interval.id))

    const editInterval = () =>
      setIntervals((prevIntervals) =>
        prevIntervals.map((int) => (int.id === interval.id ? interval : int)),
      )

    action === 'add' && addInterval()
    action === 'remove' && removeInterval()
    action === 'edit' && editInterval()
  }

  return { intervals, setIntervals: setTimeIntervals }
}

export { useTimeIntervals }
