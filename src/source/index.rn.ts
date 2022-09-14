import { MBBridge } from '@ymm/rn-lib'

export default () => {
  return new Promise((resolve) => {
    MBBridge.app.city.children({ code: 0, deep: 3 }).then((res) => {
      resolve(res.data)
    })
  })
}
