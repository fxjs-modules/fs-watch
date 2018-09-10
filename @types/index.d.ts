/// <reference path="file-diff.d.ts" />

import ObservableBox from "../src/observable-box";

// declare module "events" {
//     export const EventEmitter: typeof Class_EventEmitter
// }

declare module "@fxjs/fs-watch" {
    export const ObservableBox: ObservableBox
}