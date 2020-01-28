let btn = document.querySelector('.uk-background-primary');

function paddFunc() {
    let pos = 0;
    let id = setInterval(padd, 10);
    function padd () {
        if (pos == 100) {
            clearInterval(id);
        } else {
            pos++;
            btn.style.margin = pos + 'px';
        }
    }
}

btn.addEventListener('click', paddFunc);

let aaa = document.querySelector('.btn');
aaa.addEventListener('click', function (event) {
    //console.log(event);
    console.log(event.target.tagName);
});