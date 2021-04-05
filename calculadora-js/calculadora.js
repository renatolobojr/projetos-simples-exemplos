function digito(num){
    var salvo = document.calc.visor.value;
    document.calc.visor.value = salvo + num;
    console.log(num);
}

function zerar(){
    document.calc.visor.value = "";//
}

function calcular(){
    document.calc.visor.value = eval(document.calc.visor.value);
}