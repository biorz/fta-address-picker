// 如果组件使用的是React Hooks 写法， 删除上面的代码，换成以下写法
import { ActionSheetProps, CustomTitle } from '@fta/components/types/action-sheet'
import { OptionWithParent, SelectorProps } from '@fta/components/types/selector'
import { FC } from 'react'

export interface AddressPickerProps
  extends Omit<ActionSheetProps, 'example', 'className', 'customStyle'>,
    Omit<SelectorProps, 'options'>,
    Partial<Pick<SelectorProps, 'options'>>,
    Pick<CustomTitle, 'confirmText'> {
  /**
   * 标题
   */
  title?: string | ReactElement
  /**
   * 使用自定义数据源
   * @default false
   */
  useCustom?: boolean
  /**
   * 数据源异步获取完毕的回调
   */
  onFetch?: () => void
  /**
   * 数据源异步获取完毕的回调
   */
  onError?: () => void
  /**
   * 点击确定按钮的回调
   */
  onConfirm?: (selected: OptionWithParent[] | OptionWithParent[][]) => void
  /**
   * 自定义顶部区域
   */
  prefix?: ReactNode
  /**
   * 自定义底部区域
   */
  suffix?: ReactNode
}

declare const AddressPicker: FC<AddressPickerProps>

export default AddressPicker
