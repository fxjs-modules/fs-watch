var test = require('test')
test.setup()

var ObservableBox = require('../').ObservableBox
var EVENT_TYPES = require('../').EVENT_TYPES

describe('file-add', () => {
    const obsBox = new ObservableBox()

    obsBox.emit(EVENT_TYPES.FILE_ADDED)
})

test.run(console.DEBUG)
