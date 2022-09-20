const rollupConfig = require('@fta/rollup-config-taro3')
const path = require('path')

async function build() {
  await rollupConfig.build({
    tsconfig: path.resolve('./tsconfig.rollup.json'),
    external: [/@fta\/components/],
  })
}

build()
