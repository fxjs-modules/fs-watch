// 12312312312312312312

const fs = require('fs')
const coroutine = require('coroutine')

const results = {
    prev_mtime: null,
    cur_mtime: null,
}

function reset () {
    results.prev_mtime = null
    results.cur_mtime = null
}

const filepath = './test.gif'
while (true) {
    if (!fs.exists(filepath)) {
        reset()
    }

    results.prev_mtime = results.cur_mtime
    try {
        results.cur_mtime = fs.stat(filepath).mtime
    } catch (e) {
        reset()
    }

    // console.log('stat', stat)
    console.log('time diff',
        results
    )

    coroutine.sleep(1000)
}