
let para = document.querySelector('p');
let heading = document.querySelector('h1');
let buttons = document.querySelector('button');
function color(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let col= `rgb(${red},${green},${blue})`;
    return col;
};
buttons.addEventListener("click", function(){
    let colours=color();
  buttons.style.backgroundColor=colours;
  para.style.backgroundColor=colours;
  heading.style.backgroundColor=colours;
  heading.innerText=colours;
});
buttons.addEventListener("mouseleave",function(){
    buttons.style.backgroundColor="white";
    para.style.backgroundColor="white";
     heading.style.backgroundColor="white";
})