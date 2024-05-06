const { gets, print } = require('./funcoes-auxiliares-ex3');

let salario = gets(); 
let beneficio = gets(); 

if (salario >= 0 && salario <= 1100) {
    salario = salario * 0.95
    salario = salario + beneficio
    print('seu salario é:', salario)

} else if (salario > 1100 && salario <= 2500) {
    salario = salario * 0.90
    salario = salario + beneficio
    print('seu salario é:', salario)

} else if (salario > 2500){
    salario = salario * 0.85
    salario = salario + beneficio
    print('seu salario é:', salario)
} else {
    print('valor invalido')
}

