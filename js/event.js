function makeDark() {
    document.body.style.backgroundColor = 'rgb(37, 37, 37)';  
    document.body.style.color = 'white';  
}
// handel btn using function 
const blueBtn = document.getElementById('make-blue');
blueBtn.onclick = func;
function func() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}
// handel btn using anonymous function 
const greenBtn = document.getElementById('make-green');
greenBtn.onclick = function () {
    document.body.style.backgroundColor = 'Green';
    document.body.style.color = 'white';
}
// handel btn using addElement listener
const violetRedBtn = document.getElementById('make-violet');
violetRedBtn.addEventListener('click', violet);
function violet() {
    document.body.style.backgroundColor = ('MediumVioletRed')
}
//handel btn using addElementListener with function
const darkturquoiseBtn  = document.getElementById('make-darkturquoise');
darkturquoiseBtn.addEventListener('click', function quoise() {
    document.body.style.backgroundColor = 'darkturquoise';
})
//direct shortcut
document.getElementById('make-coral').addEventListener('click', function () {
    document.body.style.backgroundColor = 'coral'
    document.body.style.color = 'white'
})