const Ano = document.getElementById("Ano");
const btn1 = document.getElementById("btn1");
const Resultado = document.getElementById("Resultado");


function calcular(){
     if ( (Ano.value%4 === 0 && Ano.value%100 !==0 ) || (Ano.value%400 === 0))
     { Resultado.textContent = "Es un ano bisisesto"}
        else {Resultado.textContent = "No es un ano bisiesto";}
           }   
btn1.addEventListener("click", calcular)