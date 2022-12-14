import { Option } from '@fta/components/types/selector'
import Taro from '@tarojs/taro'

export default function resolveAsyncSource(depth = 3) {
  return Taro.request({
    url: 'https://ymm56.com/ymm-map-app/city/queryRegionTree',
    method: 'POST',
    data: {
      callerFlag: 'Applet',
      regionLevel: depth,
    },
  }).then((res) => {
    const data = (res.data?.regionTree ?? []) as Option[]

    // data.unshift({
    //   code: 0,
    //   id: 0,
    //   shortName: '全国',
    //   name: '全国',
    //   children: [
    //     {
    //       code: 0,
    //       id: 0,
    //       shortName: '全国',
    //       name: '全国',
    //       children: [
    //         {
    //           code: 0,
    //           id: 0,
    //           shortName: '全国',
    //           name: '全国',
    //           children: [],
    //         },
    //       ],
    //     },
    //   ],
    // })
    return data
  })
}
