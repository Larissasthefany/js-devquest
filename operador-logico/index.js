// let usuarioVerificado = true

// if(usuarioVerificado){
//     console.log("Usuario Verificado")
// }else{
//     console.log("Usuario não verificado")
// }


//BOOLEAN

/*
   == --- igual --- a==b --- so é verdadeiro se o A for igual ao B

   === --- idêntico --- a===b --- só é verdadeiro  se o A for idêntico ao B

   != --- diferente --- a!=b --- so é verdadeiro se o A for diferente do B

   !== --- não idêntico --- a!==b --- só é verdadeiro  se o  A  nao for  identico ao B

   <  --- menor que --- a < b --- verdadeiro quando A for menor q B

   <=  --- menor igual que --- a <+ b --- verdadeiro quando A for menor ou igual a  B

   >  --- Maior que --- a > b --- verdadeiro quando A for maior q B

   >=  --- Maior igual que --- a >= b --- verdadeiro quando A for maior ou igual a  B

   console.log(a==b)
*/ 

// Tabela do E (&&)

console.log(a === b && a <= b)
// Verdadeiro e Verdadeiro = Verdadeiro

console.log(a === b && a < b)
//V e F = F

console.log(a > b && a === b)
//F e V = F

console.log(a > b && a < b)
//F e F = F


//Tabela do OU ( || )
console.log(a === b || a <= b)
// V ou V = V

console.log(a === b || a < b)
//V ou F = V

console.log(a > b || a === b)
//F ou V = V

console.log(a > b || a < b)
//F ou F = F

const a = 2
const b = 2

// Tabela do Não (!)

console.log(!(a === b)) //Falso
// Mesmo se meu resultado for verdadeiro e eu por o (!) ele ira ser falso
