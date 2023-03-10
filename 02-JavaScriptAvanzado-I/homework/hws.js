//#SCOPE AND HOSTING

//  Determiná que será impreso en la consola, sin ejecutar el código.
//  Investiga cuál es la diferencia entre declarar una variable con
//   `var` y directamente asignarle un valor.


//--> 1 Ejercicio

x = 1; // global undifine
var a = 5; //  5  
var b = 10; // 10
var c = function (a, b, c) { //
   var x = 10;  // 10
   console.log(x); //  10
   console.log(a); // 5 
   var f = function (a, b, c) { // recursion :P
     b = a; // 5(b)         
      console.log(b);// 5
      b = c; // 10 (b) 
      var x = 5; // 10 -> var x 5
   };
   f(a, b, c); //  5 9 10
   console.log(b); //  9
};
c(8, 9, 10); // 
console.log(b); // 10
console.log(x); // 1

//--> 2 Ejercicio

console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
// var bar = 1;
// baz = 2;

//--> 3 Ejercicio

var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); //franco

//--> 4 Ejercicio

var instructor = 'Tony';
console.log(instructor);//Tony
(function () {
   if (true) {
      var instructor = 'Franco'; 
      console.log(instructor);//Franco
   }
})();
console.log(instructor);//Tony

//--> 5 Ejercicio

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';// 
   let pm = 'Reverse Flash';
   console.log(instructor);// the flash
   console.log(pm);//reverse flahs
}
console.log(instructor);// the flash
console.log(pm);// franco

// # Coerción de Datos
//¿Cuál crees que será el resultado de la ejecución de estas operaciones?

6 / "3" //2 num empieza
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5//$45 concat string inicia
"4" - 2//2 - no es concat
"4px" - 2// NaN NaN es una propiedad del global object (objeto global), por ejemplo, es una variable de alcance global. El valor inicial de NaN es Not-A-Number (No es Un Número) 
7 / 0// 0 -> infinty
{}[0]// [0]
parseInt("09")// 9
5 && 2// 2 ultimo numero
2 && 5//5
5 || 0//5
0 || 5//5 0 no tiene valor sigue tomando el primero
[3]+[3]-[10]// 23 ?? haha *
3>2>1;//true :O -> false
[] == ![]// true

// # Hoisting  ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

function test() { //
    console.log(a); // undifine
    console.log(foo());2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
test();

 // Y el de este código? :

 var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      let snack = 'Friskies';
      return snack;//Friskies
   }
   return snack;//Meow Mix
}

console.log(getFood(false)); //Meow Mix XD lo hice!

//# This
// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

//  Event loop

function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing();