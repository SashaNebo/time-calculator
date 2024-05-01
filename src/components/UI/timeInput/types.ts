import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { TIME_FORM } from '../../../types'

interface ISIZE {
  size?: 'xxl' | 'xl' | 'lg'
}

type INPUT_PROPS = {
  register?: UseFormRegister<TIME_FORM>
} & InputHTMLAttributes<HTMLInputElement>

export type TIME_INPUT = ISIZE & {
  propsHH?: INPUT_PROPS
  propsMM?: INPUT_PROPS
}
