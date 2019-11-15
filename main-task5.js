let btn = document.querySelectorAll('button'),
inDiv = document.querySelector('.in');

//console.log(btn);

// btn[1].onclick = function() {
//     alert('111');
// };

// btn[2].addEventListener('mouseenter', function() {
//     alert('mouseenter');
// });

btn.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        console.log('Навели мышкой на кнопку');
    });
});

inDiv.addEventListener('click', function(event) {
    console.log(event.target); 
});