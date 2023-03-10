'use strict';
// No usar parseInt para pasar string a número y  -> "9" -> 9 -> var mult = "2" * 1 -> num
// No usar toString para pasar de número a string -> 9 -> "9" -> var se = "" + 1 -> "1"

// En Binario a decimal recibimos un string y retornamos un número
                                      // let i = 0 1 2 3 4
function BinarioADecimal(str) { // -> in string "1 1 1 0 0"
   console.log(str)   // pos  str.length - 1     4 3 2 1 0 //AQUI consologea para saber que tipo de dato recibe
   var result = 0
   var pos = str.length -1 
   for (let i = 0; i < str.length; i++) {
      result = result + str[i] * Math.pow(2,pos)
      pos--
   }
   return result
}
// pos  2      1       0
//      1      0       1       
//   1*2^2 + 0*2^1 + 1*2^0  = 

// console.log(BinarioADecimal('10')) // .toBe(2);
console.log(BinarioADecimal('11100')) // .toBe(7);

function DecimalABinario(num) {
   // console.log("--->",num)
   var str = ""
   var number = num
   while (number>0) {
      // console.log("--number->",number) 
      //      1  +  "00"  -> "100"
      str = number%2 + str
      number = Math.floor(number/2) 
      // console.log("--str->",str)
   }
   return str
}

console.log(DecimalABinario(4))// .toBe('100');
// console.log(DecimalABinario(7))// .toBe('111');

/*
7 -> binario

7 / 2       7 % 2            1
3 / 2       3 % 2         1
1 / 2       1 % 2      1
0


21 / 2                   1
10 / 2                0
5  / 2             1
2  / 2         0
1  / 2     1
0
*/
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

// * Ver bien en los test que es lo que entra y que espera que retornemos

/*
Estar parado en el lugar correcto

gitFlow

git add .
git commit -m "ejercicio 1 finish"
git push

git branch
*main

git push origin main


git branch
*master

*/

/*
Recordatorio
Los 2 (dos) métodos que no debemos usar son:
parseInt   ->  para pasar de cadena a número
toString() ->  para pasar de número a string

Los otros métodos si los podemos usar.



BUENOS HÁBITOS

-> Leer bien las consignas <-
-> Leer los Test (si los hay) para complementar las consignas <-
-> Si hay otro archivo externo que contiene funciones que se entrelazan con
   nuestro code, las debemos ver y entender que reciben y que hacen <-
-> usar mucho el consologear <-
-> identificar que tipo de dato es el input (el que entra) <-
-> identificar que tipo de dato es el output (lo que debemos retornar) <-
-> googlear -> stackoverflow -> github -> documentación oficial -> etc.
-> Regla de los 20 minutos de oro <-
-> pseudo code
-> coodear con compañeros/as <-
-> compartir y cooperar <-

*/