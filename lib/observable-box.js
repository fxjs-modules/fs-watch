/// <reference path="../@types/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const events = require("events");
const vm = require("vm");
const CONSTANTS = require("./constants");
class ObservableBox extends events.EventEmitter {
    constructor() {
        super();
        this.on(CONSTANTS.FILE_ADDED, () => { console.log('FILE_ADDED'); });
        this.on(CONSTANTS.FILE_REMOVED, () => { console.log('FILE_REMOVED'); });
        this.on(CONSTANTS.FILE_UPDATED, () => { console.log('FILE_UPDATED'); });
        this._sandbox = new vm.SandBox({}, (name) => require(name));
    }
}
exports.default = ObservableBox;
