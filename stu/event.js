/**
 * Created by Administrator on 2017/5/4.
 */
var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()
life.setMaxListeners(3);

function water(who) {
    console.log('给' + who + '倒水');
}
life.on('requestAnswer', water)

life.on('requestAnswer', function (who) {
    console.log('给' + who + '做饭');
})

life.on('requestAnswer', function (who) {
    console.log('给' + who + '洗衣');
})

life.on('anotherEvent', function (what) {
    console.log('anotherEvent:' + what);
})

life.removeListener('requestAnswer', water)
life.removeAllListeners('anotherEvent');
// life.removeAllListeners();

var hasListener1 = life.emit('requestAnswer', 'abc');
var hasListener2 = life.emit('anotherEvent', 'zzz');
var hasListener3 = life.emit('errorEvent', 'zzz');

console.log(hasListener1);
console.log(hasListener2);
console.log(hasListener3);

console.log(life.listeners('requestAnswer').length)
console.log(EventEmitter.listenerCount(life, 'anotherEvent'))