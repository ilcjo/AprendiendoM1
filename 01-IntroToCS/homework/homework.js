'use strict';

function BinarioADecimal(num) {
//para crear la regla de binario a decimal 
// 4 3 2 1 0 -> POSICION -> recorrer 
// numero -> PARAMETRO ya lo traduce a binario
//elevado por la posicion
//sumar el resultado de ese for
 //var elevado=
  //---EXPLICACION DE LA CLASE---
  //var se = "" + 1 (remplaza nativamente de java remplaza parseInt)
  //var mult = "2" * 1 (remplaza nativamente de java tostring)
  var result = 0; //el num que devuelve
  var pos = str.length -1;
  for( i = 0; i < num.length; i--){
    result = result +num[i]* Math.pow(2,pos)
    pos --
  }
  return result


// var numero = parseInt(num, 2);
 //return numero;
 
 //const binario = num.split("");
 //const revers = binario.reverse();
 //let decimal = 0;
   //for (i = 0; i < revers.length; i++) {
     //decimal = decimal + (revers.startsWith("1") ? revers[i] * 2  i:reverse[i] * 2  i / 2);
   //}
   //return decimal;

 //for(let i= 0; i < revers.length; i++){
   //const exponente = math.pow(2,i);
   //console.loge(exponente); 
  
//function BinarioADecimal(num) {
  // let numero = num.toString().split("").reverse().map(numero => +numero)
  // let decimal = 0

  // for(let i = 0; i<numero.length; i++){
    //  decimal += numero[i](2**i)
   //}

   //return decimal
}

function DecimalABinario(num) {
  //console.log("-->"num) test en libreria para saber cual es el dato
 var str =""
 var number= num
 while (number>0)//si es 0 es el corte del bucle
 {Math.floor(num/2)}
 return str
   //let numeroRedondeado = num.toFixed(num);
   //return parseInt(numeroRedondeado).toString(2);
  // if(num < 2)
    //  return num
   //else return (num%2 + parseInt(DecimalABinario(num/2))*10).toString()
   //let exponente = 0;
//let numeroDecimal = 0;
  // for (let i = num.length - 1; i >= 0; i--) {
    //  if (num.charAt(i) === '1') {
      //  numeroDecimal += Math.pow(2, exponente);
      //}
      //exponente++;
} 

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
