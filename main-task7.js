window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.uk-background-primary');
    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log('touchstart');
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    //     console.log(e.target);
    // });
    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log('touchmove: ' + e.touches[0].pageX);
    });
    // box.addEventListener('touchleave', function(e) {
    //     e.preventDefault();
    //     console.log('touchleave');
    // });
    // box.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     console.log('touchend');
    // });
    // box.addEventListener('touchenter', function(e) {
    //     e.preventDefault();
    //     console.log('touchenter');
    // });
    // box.addEventListener('touchcancel', function(e) {
    //     e.preventDefault();
    //     console.log('touchcancel');
    // });
    console.log('DOMContentLoaded - OK');
});

// let pass = prompt('Введи пароль');
// console.log(pass.replace(/./g, "*"));

let name = prompt('Введи имя');
console.log(name.replace(/a/ig, "AA"));

console.log(name.match(/\d/g));