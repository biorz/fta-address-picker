// 如果组件使用的是React Hooks 写法， 删除上面的代码，换成以下写法
import { ActionSheetProps } from '@fta/components/types/action-sheet'
import { SelectorProps } from '@fta/components/types/selector'
import { FC } from 'react'

export interface AddressPickerProps
  extends ActionSheetProps,
    Omit<SelectorProps, 'options'>,
    Partial<Pick<SelectorProps, 'options'>> {}

declare const AddressPicker: FC<AddressPickerProps>

export default AddressPicker
