import { View } from '@tarojs/components'
import React from 'react'
import { AddressPickerProps } from '../types'
import './style/index.scss'

function AddressPicker(props: AddressPickerProps): JSX.Element {
  return <View className='fta-address-picker'>{props.children}</View>
}

export default AddressPicker
