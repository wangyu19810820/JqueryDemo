function print(content) {
    console.log(content)
}

function we(callback, something) {
    callback(something)
}

we(print, "aa")

we(function (content) {
    console.log(content)
}, "bb")