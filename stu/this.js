var pet = {
    word: '...',
    speak: function (doWhat) {
        console.log(doWhat + ' ' + this.word)
    }
};

var dog = {
    word: 'wang'
}

pet.speak('speak');
pet.speak.call(dog, 'speak')
pet.speak.apply(dog, ['speak']);


// function Pet(word) {
//     this.word = word;
//     this.speak = function () {
//         console.log(this.word)
//     }
// }
// function Dog(word) {
//     // Pet.call(this, word)
//     Pet.apply(this, [word])
// }
// var dog = new Dog('www')
// dog.speak();
