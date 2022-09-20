#!/usr/bin/env node
const path = require('path')
const fs = require('fs-extra')
const { execSync } = require('child_process')

const taroRoot = path.resolve(__dirname, '../../../../')
const pkgRoot = path.resolve(__dirname, '../')
const ComponentMain = './index.ts'

const OUTPUT = 'dist/rn'

const main = () => {
  const pathPrefix = path.relative(taroRoot, pkgRoot)
  const outputDir = path.join(pathPrefix, OUTPUT)
  fs.ensureDirSync(path.resolve(taroRoot, outputDir))

  const execOpts = {
    cwd: taroRoot,
  }

  const input = path.resolve(pkgRoot, ComponentMain)

  // console.log('componentfilename', componentFilename);
  console.log(`
=> build: ${input}
=> output: ${outputDir}`)

  execSync(
    `taro build native-components --type arn --input ${input} --output ${outputDir}`,
    execOpts
  )

  const tsPath = path.resolve(pkgRoot, `types/index.d.ts`)
  const tsOutput = path.resolve(pkgRoot, `${OUTPUT}/index.d.ts`)
  fs.copySync(tsPath, tsOutput)
}

main()
