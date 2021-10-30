---
id: ci
title: Continuous Integration (CI)
sidebar_label: Continuous Integration (CI)
---

All the following configurations work with electron-react-boilerplate.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="travis"
values={[
{ label: 'Travis CI', value: 'travis', },
{ label: 'Azure Pipelines', value: 'azure', },
{ label: 'GitHub Actions', value: 'gh-actions', },
{ label: 'AppVeyor', value: 'appveyor', },
]
}>
<TabItem value="travis">

```yml
matrix:
  include:
    - os: osx
      language: node_js
      node_js:
        - node
      env:
        - ELECTRON_CACHE=$HOME/.cache/electron
        - ELECTRON_BUILDER_CACHE=$HOME/.cache/electron-builder
    - os: linux
      language: node_js
      node_js:
        - node
      services:
        - xvfb
      addons:
        apt:
          sources:
            - sourceline: "ppa:ubuntu-toolchain-r/test"
          packages:
            - gcc-multilib
            - g++-8
            - g++-multilib
            - icnsutils
            - graphicsmagick
            - xz-utils
            - xorriso
            - rpm

before_cache:
  - rm -rf $HOME/.cache/electron-builder/wine

cache:
  directories:
    - node_modules
    - $(npm config get prefix)/lib/node_modules
    - $HOME/.cache/electron
    - $HOME/.cache/electron-builder

before_install:
  - if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then export CXX="g++-8"; fi

install:
  - npm ci
  # On Linux, initialize "virtual display". See before_script
  - |
    if [ "$TRAVIS_OS_NAME" == "linux" ]; then
      /sbin/start-stop-daemon \
      --start \
      --quiet \
      --pidfile /tmp/custom_xvfb_99.pid \
      --make-pidfile \
      --background \
      --exec /usr/bin/Xvfb \
      -- :99 -ac -screen 0 1280x1024x16
    else
      :
    fi

before_script:
  # On Linux, create a "virtual display". This allows browsers to work properly
  - if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then export DISPLAY=:99.0; fi
  - if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then sleep 3; fi

script:
  - npm run package-ci
  - npm run lint
  - npm run ts
  - npm test
  - npm run build-e2e
  - npm test-e2e
```

</TabItem>

<TabItem value="azure">

```yml
strategy:
  matrix:
    linux:
      imageName: "ubuntu-16.04"
      nodeVersion: "13.x"
    mac:
      imageName: "macos-10.14"
      nodeVersion: "13.x"
    windows:
      imageName: "windows-2019"
      nodeVersion: "13.x"

pool:
  vmImage: $(imageName)

steps:
  # Set node version
  - task: NodeTool@0
    inputs:
      versionSpec: $(nodeVersion)
  # Start virtual framebuffer server
  - bash: |
      /usr/bin/Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &
      echo ">>> Started xvfb"
    displayName: Start xvfb
    condition: and(succeeded(), eq(variables['Agent.OS'], 'Linux'))
  # Install deps and run tests
  - script: npm ci && npm test-all
    env:
      DISPLAY: ":99.0"
  # Generate coverage report
  - script: npm test --coverage --coverageReporters=cobertura
  # Publish coverage report
  - task: PublishCodeCoverageResults@1
    inputs:
      codeCoverageTool: Cobertura
      summaryFileLocation: $(System.DefaultWorkingDirectory)/coverage/cobertura-coverage.xml
```

</TabItem>

<TabItem value="gh-actions">

```yml
name: Test

on: push

jobs:
  release:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [macos-10.14, windows-2019, ubuntu-18.04]

    steps:
      - name: Check out Git repository
        uses: actions/checkout@v1

      - name: Install Node.js and NPM
        uses: actions/setup-node@v1
        with:
          node-version: 13

      - name: npm install
        run: |
          npm install

      - name: npm test
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          npm run package-ci
          npm run lint
          npm run ts

# Failing beacuse virtual framebuffer not installed
#          npm run build-e2e
#          npm test-e2e
```

</TabItem>

<TabItem value="appveyor">

```java
image: Visual Studio 2017

platform:
  - x64

environment:
  matrix:
    - nodejs_version: 13

cache:
  - node_modules
  - release/app/node_modules
  - '%USERPROFILE%\.electron'

matrix:
  fast_finish: true

build: off

version: '{build}'

shallow_clone: true

clone_depth: 1

install:
  - ps: Install-Product node $env:nodejs_version x64
  - set CI=true
  - npm ci

test_script:
  - npm run package-ci
  - npm run lint
  - npm run ts
  - npm test
  - npm run build-e2e
  - npm test-e2e

```

</TabItem>
</Tabs>
