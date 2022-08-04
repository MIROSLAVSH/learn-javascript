// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

let box1 = document.getElementById('box');

box1.addEventListener('click', function(){
    box1.textContent = 'I want to open the box!'
    console.log('I want to open the box')
})