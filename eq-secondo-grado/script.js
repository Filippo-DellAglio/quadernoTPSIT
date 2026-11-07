const inputa=document.getElementById("a");
const inputb=document.getElementById("b");
const inputc=document.getElementById("c");
let a=parseFloat(inputa);
let b=parseFloat(inputb);
let c=parseFloat(inputc);
const soluzione1=document.getElementById("soluzione1");
const soluzione2=document.getElementById("soluzione2");

function clacolaDiscriminante(a,b,c)
{
   return (b*b)-(4*a*c);
}

let dis=clacolaDiscriminante(a,b,c);

function sol1(dis)
{
    let risultato1=(-b+Math.sqrt(dis)/Math.pow(a,2));
    let risultato2=(-b-Math.sqrt(dis)/Math.pow(a,2));

    soluzione1.textContent=risultato1;
    soluzione2.textContent=risultato2;
}


function sol2()
{
    let risultato1=-b/Math.pow(a,2);
    soluzione1.textContent=risultato1;
}

function calcola(dis)
{
    if(dis>0)
    {
        sol1(dis);
    }else
    {
        if(dis=0)
        {
            sol2(dis);
        }else
        {
            
        }
    }
}


const btnCalcola=document.getElementById("btn-calcola");