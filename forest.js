let hill=document.getElementById("hill");
let rock=document.getElementById("rock");
let stone=document.getElementById("stone");
let tree=document.getElementById("tree");
let grass=document.getElementById("grass");
let bear=document.getElementById("bear");
let con=document.getElementById("continer");
let cloud=document.getElementById("cloud");
let sun=document.getElementById("sun");
let eagle=document.getElementById("eagle");
let tree2=document.getElementById("tree2");
let range=document.getElementById("rang");
let path;
let h=0;
let w=0;
hill.onclick=()=>{
    path="url('/img/hill.png')";
     h=250;
    w=250;
}
rock.onclick=()=>{
    path="url('/img/rock.png')";
     h=200;
    w=200;
}
stone.onclick=()=>{
    path="url('/img/stone.png')";
     h=60;
    w=60;
}
tree.onclick=()=>{
    path="url('/img/tree.png')";
     h=150;
    w=150;
}
grass.onclick=()=>{
    path="url('/img/grass.png')";
     h=60;
    w=60;

}
bear.onclick=()=>{
    path="url('/img/bear.png')";
    h=100;
    w=100;
};
cloud.onclick=()=>{
    path="url('/img/cloud.png')";
     h=100;
    w=100;
}
eagle.onclick=()=>{
    path="url('/img/eagle.png')";
     h=80;
    w=80;
}
sun.onclick=()=>{
    path="url('/img/sun.png')";
     h=150;
    w=150;
}
tree2.onclick=()=>{

    path="url('/img/tree2.png')";
     h=180;
    w=180;
}
function createforest()
{
    let box=document.createElement("div");
    box.style.width=h.toString()+"px";
    box.style.height=w.toString()+"px";
    box.style.position="absolute";
    box.style.background=path;
    box.style.backgroundSize="cover";
    box.style.left=(event.offsetX-h/2)+"px";
    box.style.top=(event.offsetY-w/2)+"px";
    box.style.pointerEvents ="none";
    box.style.zIndex=range.value;
    box
    con.appendChild(box);
}
con.addEventListener("click",createforest);
