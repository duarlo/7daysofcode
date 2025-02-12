var mov=document.querySelector(".container-calculator");

mov.addEventListener('mousedown',mousedown);
function mousedown(){

    mov.addEventListener('mousemove',mousemove);
    function mousemove(e){
       mov.style.position="absolute";
        mov.style.top=e.clientY+"px";
        mov.style.left=e.clientX+"px";
    }
}
