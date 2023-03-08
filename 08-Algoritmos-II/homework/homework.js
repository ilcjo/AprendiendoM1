'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

function mergeSort(array) { //funcion merge() encargada de cuando esten dividido haga las comprobacions if (condicionales)true
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    if (array.length <= 1) {
      return array;
    }
    
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

 console.log(mergeSort([5, 1, 4, 2, 8])) 
// [10,25,30]
// var  mayor = [];     
// var  menor = [];    
// var pivot =[0];   
//  for()
 



//    var mitad = Math.floor(array/2);    //[5, 1, 4, 2, 8]
//    let izq = [];
//    for(let i = 0; i < mitad; i++) {
//         izq.push(array[i]);
//         console.log(izq); 
//      }
//  let der=[];
//  for(let j = mitad; array.lenght; j--)
//        der.push(array[i]);
  

// function merge(){
//   if(true){

//     right.push(array[i])

//   }
// okey probemos ahora
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
