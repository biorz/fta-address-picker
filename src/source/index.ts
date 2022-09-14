import { Option } from '@fta/components/types/selector'
import Taro from '@tarojs/taro'

export default function resolveAsyncSource(depth = 3) {
  console.log('resolve')
  return Taro.request({
    url: 'https://ymm56.com/ymm-map-app/city/queryRegionTree',
    method: 'POST',
    data: {
      callerFlag: 'Applet',
      regionLevel: depth,
    },
  }).then((res) => {
    console.log('resssss', res)
    return (res.data?.regionTree ?? []) as Option
  })
}
