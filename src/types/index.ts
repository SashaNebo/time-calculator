export type SPRITE_ICONS = 'edit' | 'remove' | 'check'

export type TIME_FORM = {
  hh1: string
  hh2: string
  mm1: string
  mm2: string
}

export type INTERVAL = {
  id: string
  hh: string
  mm: string
}

export type INTERVALS_STATE = {
  intervals: INTERVAL[]
  setIntervals: (interval: INTERVAL, action: 'add' | 'remove' | 'edit') => void
}

export type INTERVALS_CONTEXT = React.Context<INTERVALS_STATE>
