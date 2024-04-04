import { FC } from 'react'

import { SPRITE_ICONS } from '../../../types'

interface P {
  iconName: SPRITE_ICONS
}

const IconComponent: FC<P> = ({ iconName }) => {
  const iconsList = {
    check: CheckIcon,
    remove: RemoveIcon,
    edit: EditIcon,
  }

  const IconComponent = iconsList[iconName]

  return <IconComponent />
}

const CheckIcon: FC = () => (
  <svg viewBox='0 0 1200 1200'>
    <g id='Layer_2' data-name='Layer 2'>
      <path
        id='path3015'
        d='M0,0v775.711V1200h424.289
      H1200V752.556V424.289l-196.875,196.875v381.961H621.164H196.875V578.836V196.875h381.961L775.711,0H0z M1030.008,15.161
      l-434.18,434.25L440.7,294.283L281.618,453.438L595.821,767.57l159.082-159.082l434.18-434.25L1030.001,15.157L1030.008,15.161z'
      />
    </g>
  </svg>
)

const RemoveIcon: FC = () => (
  <svg viewBox='0 0 512 512'>
    <g>
      <path
        d='M0,0v512h512V0H0z M327.115,365.904L256,294.789l-71.115,71.115l-38.789-38.789L217.211,256l-71.115-71.115l38.789-38.789
          L256,217.211l71.115-71.115l38.789,38.789L294.789,256l71.115,71.115L327.115,365.904z'
      />
    </g>
  </svg>
)

const EditIcon: FC = () => (
  <svg viewBox='0 0 1200 1200'>
    <g id='Layer_2' data-name='Layer 2'>
      <path
        id='path3015'
        d='M0,0v775.711V1200h424.289
      H1200V752.556V424.289l-196.875,196.875v381.961H621.164H196.875V578.836V196.875h381.961L775.711,0H0z M1030.008,15.161
      l-434.18,434.25L440.7,294.283L281.618,453.438L595.821,767.57l159.082-159.082l434.18-434.25L1030.001,15.157L1030.008,15.161z'
      />
    </g>
  </svg>
)

export { IconComponent }
