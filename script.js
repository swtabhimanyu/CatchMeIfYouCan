var box=document.getElementById("box");
box.addEventListener('mouseenter',move);
box.addEventListener('mousemove',move);
box.style.top='10px';
box.style.left='10px'
var height=window.innerHeight-box.offsetHeight;
var width=window.innerWidth-box.offsetWidth;

function move(){
    let arr=randomPosition();
    
    box.style.top=arr[0]+'px';
    box.style.left=arr[1]+'px';
}


function randomPosition(){
    let arr=[Math.random() * height, Math.random() *width];
    return arr;

}