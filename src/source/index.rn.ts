import { MBBridge } from '@ymm/rn-lib'

export default (depth = 3) => {
  return new Promise((resolve) => {
    MBBridge.app.city.children({ code: 0, deep: depth }).then((res) => {
      resolve(res.data)
    })
  })
}
