// FOR

let num
let resultado = 0
    
    while (num !== 0) {

        num = Number(prompt('Ingrese un numero'))
        resultado = suma(num,resultado)
    }

    console.log(resultado)

    function suma(num1,num2) {
        return num1 + num2
    }

    console.log(suma(1,1))