/*

|=---= isNaN =---=|

isNaN serve para verificar se um é NaN (Not-a-Number) e retorna em "true" se o valor para ela não puder ser interpretado como número, e "false" caso seja interpretado como número.

isNaN seria uma afirmação "não é um número" e te retorna com true ou false

Geralmente isNaN é muito usado para verificar campos onde o usuário deve colocar um número, calo ele coloque um valor string, podemos usar isNaN para fazer uma verificação.

*/

console.log('----------------')
console.log(' TESTE DE isNaN ')
console.log('----------------')

console.log(isNaN(123));        // false, 123 é um número.
console.log(isNaN("123"));      // false, "123" é convertido para o número 123 que se torna um número.
console.log(isNaN("abc"));      // true, "abc" não pode ser convertido para um número e não é um número.
console.log(isNaN(NaN));        // true, o valor já é NaN (Not-a-Number).
console.log(isNaN(undefined));  // true, undefined não é um número.

/*

Como pode ver, a segunda é false porque isNaN converte string para número para fazer a verificação.
Isso pode causar alguns comportamentos indesejados no código já que ele irá converter.

Para fazer uma verificação mais rigorosa pode colocar "Number.isNaN" para converter para número e fazer o teste.

*/

console.log('-----------------------')
console.log(' TESTE DE Number.isNaN ')
console.log('-----------------------')

console.log(Number.isNaN(123));         // false, 123 é um número.
console.log(Number.isNaN("123"));       // false, "123" passa a ser um número com a conversão.
console.log(Number.isNaN("abc"));       // false, "abc" passa a ser um valor.
console.log(Number.isNaN(NaN));         // true, mesmo forçando NaN sempre vai ser Not-a-Number.
console.log(Number.isNaN(undefined));   // false, undefined passa a ser um valor.