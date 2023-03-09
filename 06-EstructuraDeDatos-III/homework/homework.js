'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS) usar la funcion que pasa por parametro 
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) { //funcion que a futuro trabajara un objeto
        // this.value = value
        // this.left = null;
        // this.right = null;
    }
  //para recorrer se neceita recursion   
BinarySearchTree.prototype.insert = function (value) {   
   
    // if (value <= this.value){
    //    if(this.left === null){ //if !this.right
    //     this.left = new BinarySearchTree(value);
    //    } else {
    //      this.left.insert(value);
    //    }
    // } else{
    //     if(this.right === null){
    //       this.right = new BinarySearchTree(value);
    //     }else {
    //       this.right.insert(value);
    //     }
    //   }
    // };  //trabajamos con funciones mejor con const let o var si tranajamos en bloque o no
      const subTree = new BinarySearchTree(value)
      if (this.data == null) {
           this.data = subTree;
      
         } else if (value <= this.data) {
           if (this.left === null) {
             this.left = subTree;
           } else if {
             this.left.insert(value);
           }
         } else {
           if (this.right === null) {
             this.right = subTree;
           } else {
             this.right.insert(value);
           }
         }
        }  
       
BinarySearchTree.prototype.size = function () {
  let count = 1; // Contar el nodo actual
  if (this.left !== null) {
    count += this.left.size(); // Sumar el tamaño del subárbol izquierdo
  }
  if (this.right !== null) {
    count += this.right.size(); // Sumar el tamaño del subárbol derecho
  }
  return count;
};

 BinarySearchTree.prototype.contains = function (value) {
  if (value == this.value ){
    return true;
  }
  if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  }
  if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  }
  return false;
};


   
 BinarySearchTree.prototype.breadthFirstForEach = function (value) { // queue=[] persistan los datos es un array q
   
   
};
 
BinarySearchTree.prototype.depthFirstForEach = function (callback, order = 'in-order') {
  if (order === 'in-order') { //L V R
    if (this.left !== null) {
      this.left.depthFirstForEach(callback, order);
    }
    callback(this.data);
    if (this.right !== null) {
      this.right.depthFirstForEach(callback, order);
    }
  } else if (order === 'pre-order') {
    // Implementar recorrido "pre-order"
  } else if (order === 'post-order') {
    // Implementar recorrido "post-order"
  }
};
    // const tree2 = new BinarySearchTree(10);
    // const tree3 = new BinarySearchTree(1);
    // console.log(tree2)
    // console.log(tree3)

 // prodfuncdidad niveles 























// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
