let check=0;
let check2=0;
function togglebutton()
{
    let c=document.getElementById("circle");
    let s=document.getElementById("sun");
    let m=document.getElementById("itemframe");

    if(check==0)
    {
         c.setAttribute("style","margin-right:auto;margin-left:0px;border-radius:10px; background-color:white;");
         s.setAttribute("style","left:50px; top:400px;");
         m.style.backgroundColor="#f4e8bd";
        s.style.backgroundColor="orange";
        check=1;
        check2=0;
    }
    else if(check==1)
    {
        c.setAttribute("style","margin-right:auto;margin-left:auto;border-radius:10px; background-color:yellow;");
        m.style.backgroundColor="#87CEEB";
        s.setAttribute("style","left:325px; top:40px;");
        s.style.backgroundColor="yellow";
        if(check2==0)
        {
            check=2;
        }
        else{
            check=0;
        }
    }
    else if(check==2){
        c.setAttribute("style","margin-right:0px;margin-left:auto;background-color:orange;");
        s.setAttribute("style","left:450px; top:350px;");
        m.style.backgroundColor="black";
        s.style.backgroundColor="white";
        check=1;
        check2=1;
    }
}   