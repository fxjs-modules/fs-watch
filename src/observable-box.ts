/// <reference path="../@types/index.d.ts" />

import util = require('util')
import events = require('events')
import vm = require('vm')

import CONSTANTS = require('./constants')

class ObservableBox extends events.EventEmitter {
    _sandbox: Class_SandBox
    
    constructor () {
        super()

        this.on(CONSTANTS.FILE_ADDED, () => { console.log('FILE_ADDED') })
        this.on(CONSTANTS.FILE_REMOVED, () => { console.log('FILE_REMOVED') })
        this.on(CONSTANTS.FILE_UPDATED, () => { console.log('FILE_UPDATED') })

        this._sandbox = new vm.SandBox({}, (name) => require(name))
    }

    watchFile (filename) {
        this._sandbox.require(filename, __dirname)
    }
}

export default ObservableBox