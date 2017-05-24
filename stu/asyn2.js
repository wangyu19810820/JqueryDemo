var i = 0

function print() {
    console.log(i)
}

function add(callback) {
    setInterval(function () {
        i++
        callback()
    }, 1000)
}

add(print)
