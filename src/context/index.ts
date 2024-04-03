import { createContext } from 'react'
import { INTERVALS_STATE } from '../types'

export const TimeIntervalsContext = createContext<INTERVALS_STATE | null>(null)
