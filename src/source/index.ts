import { Option } from '@fta/components/types/selector'

export default function resolveAsyncSource() {
  return Promise.resolve([] as Option[])
}
