import { ComponentClass } from 'react'

export interface AddressPickerProps {}

export interface AddressPickerState {}

declare const AddressPicker: ComponentClass<AddressPickerProps, AddressPickerState>

export default AddressPicker

/**
// 如果组件使用的是React Hooks 写法， 删除上面的代码，换成以下写法
import { FC } from 'react'

export interface AddressPickerProps {

}

declare const AddressPicker: FC<AddressPickerProps>

export default AddressPicker
 */
