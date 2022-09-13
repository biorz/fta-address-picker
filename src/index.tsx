import { View } from '@tarojs/components'
import React, { Component } from 'react'
import { AddressPickerProps, AddressPickerState } from '../types'
import './style/index.scss'

class AddressPicker extends Component<AddressPickerProps, AddressPickerState> {
  public state: AddressPickerState = {}

  public render(): JSX.Element {
    return <View className='fta-address-picker'>{this.props.children}</View>
  }
}

/**
 * If you prefer React Hooks...
 
function AddressPicker(props: AddressPickerProps): JSX.Element {
  return (
    <View className='fta-address-picker'>
      {props.children}
    </View>
  )
}

 */

export default AddressPicker
