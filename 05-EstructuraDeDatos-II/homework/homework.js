'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback.
   En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, 
   al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

  class Node {
    constructor(value) {
      this.value= value;
      this.next = null;
    }
  } //classe list y classe nodo  y crear el metodo add remover el ultimo y un buscar(el nodo) o un funsion

  class LinkedList {
    constructor() {
      this.head = null;
      this._length = 0;
      // this.find = find;
      // this.insert= insert;
      // this.display = display;
      // this.findPrevious = findPrevious;
      // this.remove = remove;
    }
  }
// function(nodeValue){return nodeValue ==="two"}
LinkedList.prototype.search = function(item){
     const currentNode = this.head;
     if (!currentNode){
    return null;
  }
  if(typeof item === "function"){
    while (currentNode){
      if (item(currentNode.value)){
      return currentNode.value
    }
    currentNode = currentNode.next;
  }
   while (currentNode ){//!== null && currentNode.value!== item) {
    if (currentNode.value === item) {
      return currentNode.value
    }
    } currentNode = currentNode.next;
  }
  return null;
};

    //cre la instancia donde llama la plantilla dfe los nodos pra agregarle esos node a mi obj primncipal
LinkedList.prototype.add = function(newItem){  
    const newNode = new Node(newItem)     // agrego un metodo en mi objeto (plantilla principal)
     let current = this.head; // creo mi apuntador de cabeza (inicio) para los nodes//current es un apuntador que va cambiando de referencia
    if(!current){ // condicion de que este vacia la cabeza para gregar el node //otra es!this.head
      this.head = newNode;// si la lista esta vacia (la cabezaa null) agregue ese nnewItem con su respectivo nodo
      this._length++;// y que aguegue el valor del incremento a esta propieda
      return newNode;// y me el nodo
   }  while (current.next) { //mientras la cabeza(==current) el node siguiente sea ! a null 
             current = current.next;//agregue otra cabeza con next.
  }         current.next = newNode;//el valor de esa nueva cabeza es la plantilla del Node insertar nodo 
            this._length++; // y sigue incrementando esta propiedad cuando se agregue otra
            return newNode;                   // retornar exitoso cuando se cumpla 
};

LinkedList.prototype.remove = function(item){
   let current = this.head;
  //  let prevNode = null;
  //  while (currentNode !== null && currentNode.value !== item){
  //   prevNode = currentNode;
  //   currentNode = currentNode.next;
  //  }
  //  if (currentNode !== null)
  //  if(prevNode === null){
  //   this.head = currentNode.next;
  //  } else{
  //   prevNode.next = currentNode.next;
  //  }
  //  this._length--;
  //  return ;
   if (!current)
    return null;
   else if(!current.next)
   {
      this.head = null;
      this._length --;
      return current.value;
   } 
    while(current.next.next !== null){
      current = current.next; 
    } 
    let value = current.next.value;
    current.next = null;
    this._length --;
    return value; 
    
 };

const añadirL = new LinkedList();
const borrarL = new LinkedList();
const searchL = new LinkedList();

añadirL.add(1);
añadirL.add(3);//analizar el objeto dentro de eese paramertreo 
añadirL.add(2);
borrarL.remove();
searchL.search(1);
console.log(searchL)

      
/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets 
(slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información),
 donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
  pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. 
  Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings)
   y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash,
   y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
 this.buckets = [];// hash -> 0 a 34 
 this.numBuckets = 35;


}


HashTable.prototype.hash= function(){
var result = 0;
// for(let i = 0; i < structuredClone.length)

};
HashTable.prototype.set= function(){};
HashTable.prototype.get= function(){};
HashTable.prototype.hasKey= function(){};




const hash1 = new HashTable()










// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
