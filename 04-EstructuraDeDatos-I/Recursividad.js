//RECURSION  //recursividad cuando tenemos arrays anidados // imput tipo de dastos
// caso base y caso coret porque necesita un valor para cortar esa ejecucion o interacion
//la recusion es un bucle en 
//si la diferencia es que mejor usar recurtsion
//se llama crea un nuevo contexto 
//la idea es como un bucle
//objeto que se vea a si mismo 
// tratar de imitar codigo con el caos 
//un punto de corte necesitamois porque sino hace infinito 
//recursion multiples contextos, nuevos comnte¿xtos de ejecucion crea muchos contextos (bucle si inteera pero no crea nuevos contextos)
function recursive (num){
    if (num> 0){
        console.log(num);
         return recursive(num - 1); 
    } else {
        return "he cortado";
    }
}
console.log(recursive(1));

//instancia , mundo orietado a objetosdset en
// estructura de datos que son como arrays, 
const arr =[1,2,3,3,2]
var set1 = new Set(arr)
conjsole.log(set1.size) 

//tiene su propio , es un tipo de array u objketo que cuando pasamos un array elimina ..
//STACK Y QUEU guardar los datos en pila porque se guardan como el slack  ultimo en etrar es la ultima en salirFIFO
// STACK EJEMPLO hacer objetos con funciones (clases)
//productos con otros productos  dentro arrays clase objetos extraerlo sacarlo y gacer mas... pero tiene sque usar mas this
//funcion contructora es el nombre de esto duncion de objeto 
function Productos(){
    this.nombre = "name"
    this.id = null
    this.contain =[] 
}

 //protottype clase objeto funcion especialm le agregamois el metodo 
 Productos.prototype.addNameId = function (name ,id) {
    this.name = name; 
    this.id = id;
    return this.name 
};
// a MANERA DE CLASE FUCNION 
//SINYTAXIS : no lleva los parametros
// class Construction { //nombre de la clase
    // constructor(parameter) //aqui van los parametro
 //}


 //agregar el metodo al objeto pero con una nueva instancia 



 //stack cosntruccion de datos //son como matrices
 //trabajar este arra se amolda en array a estos como un stack, se puede objetosd o string 
 //refcordqr el ultimo es el primero que sale 
  //ejemplo de image copiar



  //QUEU tenemos que entenderla nostros
  // fibonachi 0 1 1  2 3 5 8 13 21 ...
//  0 1 + 1 2 sumar los dos anteriorees para obtener el valor 
//poscicion (index) 0 1 2 3 4 5 7 8 9 --
//n dame el fibonachi de la poscion 
//funcion mayuscula y this lo convierte en clase contrucvtora trabajando a maneja de funcion 
//3 prototype para ese moolde enqueue
//saber mi INPUT Y OUT PUT TIPS
//ver los DS Y TEST 
//  DS Tiene la info completa de otros metodos atras ya construidos