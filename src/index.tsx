import { ActionSheet, inRN, SelectorCore } from '@fta/components/index'
import { OptionWithParent, SelectorCoreRefMethods } from '@fta/components/types/selector'
import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { AddressPickerProps } from '../types'
import resolveAsyncSource from './source'
import './style/index.scss'

function _AddressPicker(
  props: AddressPickerProps,
  ref: ForwardedRef<SelectorCoreRefMethods>
): JSX.Element {
  const {
    // ActionSheet Props
    isOpened,
    onClose,
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
    title,
    clickOverlayOnClose,
    // Component Props
    options,
    useCustom,
    prefix,
    suffix,
    onFetch,
    onError,
    onChange,
    // Selector Props
    ...selectorProps
  } = props
  const [_options, setOptions] = useState([])
  const [selected, setSelected] = useState([] as OptionWithParent[] | OptionWithParent[][])

  const _onChange = (result, flattenResult) => {
    setSelected(flattenResult)
    onChange?.(result, flattenResult)
  }

  const _onConfirm = () => {
    onConfirm?.(selected)
  }

  useEffect(() => {
    useCustom || resolveAsyncSource(props.depth).then(setOptions).catch(onError)
  }, [])

  useEffect(() => {
    if (!useCustom && _options.length) onFetch?.(_options)
  }, [_options])
  return (
    <ActionSheet
      title={{
        title,
        confirmText,
        cancelText,
        onCancel,
        onConfirm: _onConfirm,
        confirmTextStyle: props.theme ? { backgroundColor: props.theme } : void 0,
      }}
      className='fta-address-picker'
      isOpened={isOpened}
      onClose={onClose}
      clickOverlayOnClose={clickOverlayOnClose}>
      {prefix}
      <SelectorCore
        ref={ref}
        options={useCustom ? options : _options}
        onChange={_onChange}
        {...selectorProps}
      />
      {suffix}
    </ActionSheet>
  )
}

const AddressPicker = forwardRef(_AddressPicker)

const defaultProps: AddressPickerProps = {
  title: '请选择地址',
  isOpened: false,
  options: [],
  useCustom: false,
  clickOverlayOnClose: false,
  confirmText: '确定',
  cancelText: '取消',
  placeholder: '支持按城市、区县名称搜索',
  onError() {},
  limitHint: '最多可选择3个地区',
  fieldNames: inRN
    ? {
        label: 'name',
        value: 'code',
        children: 'children',
      }
    : {
        label: 'shortName',
        value: 'id',
        children: 'children',
      },
}

AddressPicker.defaultProps = defaultProps

export default AddressPicker
