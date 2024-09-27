/*

|=---= Var / Let / Const =---=|

Com o ECMAScript 2015 (ES6) foram introduzidos duas outras opções no lugar de "var" que são "let" e "const".
Com a criação de let e const começaram recomendar o uso dessas opções pois vai ser o futuro. Mas para isso precisamos entender o que são e a meneira certa de usar.

Saber usar cada um deles ajuda a entender como a 

vamos tentar entender como essas outras opções se comportam:

*/



/*

|=---= let =---=|

O let funciona com escopo de bloco, o que significa que ele só vai funcionar nas declarações dentro dos "{}". Por exemplo, dentro de funções e loops.

O let também pode ser reatribuído, o que permite mudar o valor de let depois de atribuído.

Ou seja... Utilize let quando precisar de uma variável dentro de um escopo e que pode ser reatribuída.

*/

console.log('--------------')
console.log(' TESTE DE let ')
console.log('--------------')

let x = 10
x = 20 // Isso é válido
console.log(`let x = ${x}`)



/*

|=---= const =---=|

O const também tem escopo de bloco. Porém const não aceita reatribuíção, mas o conteúdo de objetos e arrays pode ser modificado.

Ou seja... Utilize const quando não precisar reatribur a variável, deixando o código mais fácil de entender e de fazer manutenções futuras, mantendo o código mais limpo e previsível. 

*/

console.log('----------------')
console.log(' TESTE DE const ')
console.log('----------------')

const y = 30
// y = 40 // Isso causará um erro, pois não pode ser reatribuído.
console.log(`const y = ${y}`)

const obj = { name: "John" }
obj.name = "Jane" // Isso é válido, pois estamos alterando o conteúdo, não a referência.



console.log('-----------------')
console.log(' TESTE DE global ')
console.log('-----------------')

function exemplo() {

    var a = 1; // escopo de função.
    let b = 2; // escopo de bloco.
    const c = 3; // escopo de bloco.
    
    if (true) {
      var a = 4; // Reatribui a 'a' globalmente.
      let b = 5; // Só muda dentro deste bloco.
      const c = 6; // Só existe dentro deste bloco.
      console.log(`Dentro do bloco, A, B e C são: ${a}, ${b} e ${c}`);
    }
    
    console.log(`Fora do bloco, A, B e C são: ${a}, ${b} e ${c}`);
  }
  
exemplo();