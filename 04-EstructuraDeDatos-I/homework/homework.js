'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, 
su factorial (representado como n!) 
es el producto de n por todos los números naturales menores que él y mayores a 0. 
Ejemplo: 5! = 5 * 4 * 3 * 2 * 1
          n = n * n-1 *n-2 *n-4* no multiplica numero
nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden
 intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
    if(n > -1 && n < 2) return 1;// n <= == 0 && == 1 
    else if (n < 0) return 0; // numeros positivos
    return n * nFactorial(n-1); //  n [parametro] * [parametro -1]
    
}
 console.log(nFactorial(3));
 //poscicion (index) 0 1 2 3 4 5 6 7 8  9 
// fibonacci         0 1 1 2 3 5 8 13 21 34 55 89
//  0 1 + 1 2 sumar los dos anteriorees para obtener el valor 

//n dame el fibonacci de la poscion 
function nFibonacci(n)  {
    if( n <=1) return n;
    else
    return nFibonacci(n-1) + nFibonacci(n-2);
}
console.log(nFibonacci(0));
console.log(nFibonacci(1));
console.log(nFibonacci(2));
console.log(nFibonacci(3));
console.log(nFibonacci(4));
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, 
donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() { //modelo de clases modelo de fucniones 
  this.element =[]; //funcion especial que es una clase =[/: Queue]
 
}

Queue.prototype.enqueue = function(value){
 return  this.element.push(value); //retorna la longitud
 
};
Queue.prototype.dequeue = function(){
    return this.element.shift();
    
};
 Queue.prototype.size = function(){
      return this.element.length
 }
var inst = new Queue();
console.log(inst.enqueue(5));
console.log(inst.enqueue(5));
console.log(inst.dequeue(5));
console.log(inst.size());






/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
