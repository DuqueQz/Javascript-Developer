const {gets, print} = require('./funcoes-auxiliares-ex1')

let media = gets()

if (media >= 0 && media < 5) {
    print ("reprovado")
} else if (media >= 5 && media < 7) {
    print ("Recuperação")
} else if (media >= 7) {
    print ("Aprovado")
} else {
    print ('numero invalido')
}
print 