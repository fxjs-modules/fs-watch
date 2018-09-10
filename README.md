# @fxjs/fs-watch

[![Build Status](https://travis-ci.org/fxjs/fs-watch.svg)](https://travis-ci.org/fxjs/fs-watch)
[![NPM version](https://img.shields.io/npm/v/@fxjs/fs-watch.svg)](https://www.npmjs.org/package/@fxjs/fs-watch)

provide observable fs-watcher/stat-watcher for file base on [EventEmitter]

## Difference with nodejs's `FSWather`/`StatWatcher`

There's no `fs.watch` API in fibjs, so this package is not like `FSWather`/`StatWatcher` in nodejs. `@fxjs/fs-watch` support changes and signal below:


| Change type | Siganl Name | Payload | Comment |
| --- | --- | --- | --- |
| file add | FILE_ADDED | | |
| file change(based on last modified) | FILE_UPDATED | | |
| file removed | FILE_REMOVED | | |
| directory add | DIR_ADDED | | |
| directory change(based on change of file in it recursively) | DIR_UPDATED | | |
| directory removoed | DIR_REMOVED | | |

## Pre-requisite

* fibjs `>= 0.26.1`

## Usage

```bash
npm i -D @fxjs/fs-watch
```

### Via Javascript API

sample build config

```javascript
```

### CLI

would be supported in the future.

## API

## Document

## Feature

## Development

fork this repo, run commands

```bash
npm i -D

# build
npm run build

# run test
npm run ci
```

## License

[GPL-3.0](https://opensource.org/licenses/GPL-3.0)

Copyright (c) 2018-present, Richard

[EventEmitter]:http://fibjs.org/docs/manual/object/ifs/eventemitter.md.html