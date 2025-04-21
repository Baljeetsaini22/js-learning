const button = document.getElementById('btn');
const parent = document.querySelector('.parent'); // use querySelector for class
const div = document.createElement('input');

button.addEventListener("click", function() {
    div.innerHTML = "Hello, I'm a new div!";
    div.style.fontSize = '24px';
    div.style.color = 'red';
    div.style.color = 'red';
    div.style.background = 'pink';
    div.placeholder = "hello bro"
    parent.appendChild(div);
})


button.addEventListener('click', function(){
    
})