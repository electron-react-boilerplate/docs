---
id: circleci
title: Circle CI Integration
sidebar_label: Circle CI Integration
---

The following config can be used for Circle CI configs:

```yaml
version: 2
jobs:
  build:
    # See https://circleci.com/docs/2.0/circleci-images/#nodejs
    docker:
      - image: circleci/node:latest
    # See https://circleci.com/docs/2.0/configuration-reference/#steps
    steps:
      - checkout
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
      - run: yarn install
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
      - run: yarn package
```
