function create(){
    let ename=document.getElementById("t1").value;
    let eclass=document.getElementById("t2").value;
    let eid=document.getElementById("t3").value;
    let estyle=document.getElementById("t4").value;
    let ev=document.getElementById("t6").value;

    let cre=document.createElement(ename);
    cre.className= eclass;
    cre.id= eid;
    cre.innerHTML= ev;
    cre.style= estyle;
    console.log(cre);
    
    document.body.appendChild(cre);

}
function reset(){
    let re1=document.getElementById("t1");
    re1.value= " ";
    let re2=document.getElementById("t2");
    re2.value=" ";
    let re3=document.getElementById("t1");
    re3.value= " ";
    let re4=document.getElementById("t1");
    re4.value= " ";
    let re6=document.getElementById("t1");
    re6.value= " ";
}
