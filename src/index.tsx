import { ActionSheet, SelectorCore } from '@fta/components'
import React from 'react'
import { AddressPickerProps } from '../types'
import './style/index.scss'

function AddressPicker(props: AddressPickerProps): JSX.Element {
  const { isOpened, options } = props
  return (
    <ActionSheet isOpened={isOpened} className='fta-address-picker'>
      <SelectorCore options={options}></SelectorCore>
    </ActionSheet>
  )
}

console.log('addresspicker', AddressPicker)

export default AddressPicker
