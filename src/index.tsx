import { ActionSheet, inRN, SelectorCore } from '@fta/components'
import React, { useEffect, useState } from 'react'
import { AddressPickerProps } from '../types'
import resolveAsyncSource from './source'
import './style/index.scss'

function AddressPicker(props: AddressPickerProps): JSX.Element {
  const {
    // ActionSheet Props
    isOpened,
    onClose,
    onConfirm,
    onCancel,
    title,
    clickOverlayOnClose,
    // Component Props
    options,
    useCustom,
    prefix,
    suffix,
    onFetch,
    onError,
    // Selector Props
    ...selectorProps
  } = props
  const [_options, setOptions] = useState([])
  useEffect(() => {
    useCustom || resolveAsyncSource(props.depth).then(setOptions).catch(onError)
  }, [])

  useEffect(() => {
    if (!useCustom) onFetch?.()
  }, [_options])
  return (
    <ActionSheet
      title={
        title || {
          onConfirm,
          onCancel,
          title: '请选择地址',
          confirmText: '确定',
          cancelText: '取消',
        }
      }
      className='fta-address-picker'
      isOpened={isOpened}
      onClose={onClose}
      clickOverlayOnClose={clickOverlayOnClose}>
      {prefix}
      <SelectorCore options={useCustom ? options : _options} {...selectorProps} />
      {suffix}
    </ActionSheet>
  )
}

const defaultProps: AddressPickerProps = {
  isOpened: false,
  options: [],
  useCustom: false,
  clickOverlayOnClose: false,
  onError() {},
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
