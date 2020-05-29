const dog = {
    name: 'corgi',
    speak() {
        console.log("woof woof");
    }
};
dog.speak()

const cat = {
    name: 'cat',
    speak: function() {
        console.log('miew miew');
    }
};

// It's better to create a function outside of an object
// and call it.

function speak(animal) {
    if animal === cat {
        console.log("Miew Miew");
    } else {
        console.log("Woof Woof");
    }
};

speak(cat.name)
