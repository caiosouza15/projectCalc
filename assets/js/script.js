function insert(numero){
   var num = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = num + numero;
}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1 );
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Digite algo!!"
    }
}

const calc = document.getElementById('calc');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const divResultado = document.getElementById('divResultado');

    if (nome !== '' && altura !== '' && peso !== ''){
       const valorIMC = (peso / (altura * altura)).toFixed(2);
       divResultado.textContent = valorIMC;

       let calssificação = "";
       if (valorIMC < 18.5){
           calssificação = "abaixo do peso."
       }      
       else if (valorIMC < 25){
           calssificação = 'com peso idual. Parabéns!!!';
       }else if (valorIMC < 30){
           calssificação = 'levemente a cima do peso';
       }
       else if (valorIMC < 35){
        calssificação = 'com obesidade grau I';
        }
        else if (valorIMC < 40){
            calssificação = 'com obesidade grau II';
        }else {
            calssificação = 'com obesidade grau III. Cuidado!';
        } 
        divResultado.textContent= `${nome} seu IMC é ${valorIMC} e você está ${calssificação}`;
        
    }else{
        divResultado.textContent = 'Preencha todos os campos!';
        }
    

}
calc.addEventListener("click", imc);



