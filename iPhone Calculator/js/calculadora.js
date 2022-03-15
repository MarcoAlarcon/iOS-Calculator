let valor1 
let sinal

function limpar() {
    document.getElementById("resultado").value = " ";   
}

function maisMenos() {
    var x = document.getElementById("resultado").value
    var resultado = parseInt(x)
    if (resultado > 0){
        document.getElementById("resultado").value = "-" + resultado
    } else {
        let y = document.getElementById("resultado").value
        let z = y.substring(1)
        document.getElementById("resultado").value = z
    }
}

function inserirNum(num){
    numero = document.getElementById("resultado").value;
    document.getElementById("resultado").value = numero + num;
}

function porcentagem(){
    let x = document.getElementById("resultado").value
    let y = eval(x) / 100
    document.getElementById("resultado").value = y
}

function dividir(){
    valor1 = document.getElementById("resultado").value
    document.getElementById("resultado").value = ""
    sinal = "/"
}

function multiplicar(){
    valor1 = document.getElementById("resultado").value
    document.getElementById("resultado").value = ""
    sinal = "*"
}

function subtrair(){
    valor1 = document.getElementById("resultado").value
    document.getElementById("resultado").value = ""
    sinal = "-"
}

function somar(){
    valor1 = document.getElementById("resultado").value
    document.getElementById("resultado").value = ""
    sinal = "+"
} 

function igual(){
    let resultado = valor1 + sinal + document.getElementById("resultado").value
    document.getElementById("resultado").value = eval(resultado)
}