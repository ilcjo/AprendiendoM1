
//crear mis propios ejemplos y demas...  
//las pilas(slack) son como cargan lso contextos 

 ## COMO FUNCIONA JAVA SCRIPT 
  >Soy ONE thread (o un hilo de ejecución)
  >asincronico
  >concurrent
  >non blocking

 ## JAVASCRIPT TIENE : 
  <tengo una heap(memoria allocation) y una stack que tengo una pila con contextos de ejecución

                GRAFICO

 HEAP      |    STACK     |            WEB API 
           |              |   DOM
           |              |   AJAX
           |              |   SET TIMEOUT
           |              | 

            ---------------------
            EVENT LOOP  

            task (CALLBACK)
            QUEUE

 
 ## CALL STACKS (Pila de ejecución)
    Significa que soy un programa de un solo hilo lo que significa
    que tengo una sola callstack y solo puedo hacer una cosa al tiempo
    es decir solo puedo correr un pedazo del codigo a la vez
    STACK es basicamente es una estructura de datos donde graba donde el programa esta
    Es decir si nos paramos en la funcion ponemos algo a la pila
    si retornamos algo de la funcion salimos del top de la pila(stack)
    Esto es lo que en resumen hace la stack
    La llamadas a las funciones las apiladas en la pila y cuando la funcion retorna algo la saca de la pila.
 ## BLOCKING 
    Que pasa cuando las cosas van despacio?, bloquear lo que hace el codigo lento.
 ## ASINCRONICO (callbacks asincronicas)
    Lo que significa que cuando corre algun codigo le damos un callback  y lo corremos luego.es decir la manda ala queue.
 ## WEBAPIS
    Responden a recuest que le en codigo hacer que java no puede, ya que el browser tiene otros ambientes para poder procesar esas recuest.
    |
 ## CALLBACKS & QUEUE 
   > Callback hace una llamada o pone hacer el trabajo afuera (weapi) que se encargue de ella y seguira ejecutando la siguiente en la stack y termina esa callback de la pila. 

  --> Las CALLBACKS pueden ser dos tipos de definiciones:
    <Una funcion llame a otra funcion> 
          ---Ejemplo:
            [1,2,3,4].forEach(function (i){
                console.log(i);
            }); ---<esta corre dentro del stack no es asincronica>

   <La segunda definicion es mas explisita, una llamada asincronica que en elfuturo pondra la llamada en la queue>
            ----Ejemplo:
            function asynForEach(array, cb){ cb sera una callback
                array.forEach(function(){
                    setTime(cb, 0); y le ponemos tiempo de ejecucion en la api 0 de ese callback
                })
            }
            asyncForEach([1,2,3,4], function (i){
                console.log)(i);
            });

   > Queue o tasck queue, cuando la api acaba el callback, este empuja esta callbaclk terminada en esta queue.
    |
 ## EVENT LOOPE
    Aquí entra la even loope hacer su trabajo, el cual es, mirar LA STACK y la TASK QUEUE, y lo que hace es sersiorarse de que la stack este vacia toma lo primero que este ne la queue y la pushea 
    en la stack y se ejecuta.

 ## ÁMBITO LÉXICO
    Este se refiere a como se traduce el lenguaje del codigo a la maquina y tiene varias fases, lo importante en este es que este es primero y dentro esta el contexto de ejecucion.
  
 
 ## CONTEXTO DE EJECUCIÓN
    Para entender este debemos entender primero el concepto de Ábmito Léxico ya que ambas coexistenm una de la otra, en este es donde el entorno donde se ejecuta una parte especifica del codigo, este se divide en dos:
  <CONTEXTO DE EJECUCION GLOBAL> Siempre que se ejecute un codigo de JS se crea este contexto(main) este tiene dos fases:

  >fase 1: FASE DE CREACIÓN:
   En este se crea el WINDOWS el objeto global
   Y una var global this.

   ## HOISTING 
    las variables que son -declaradas- en el codigo se guardan en una memoria hecha para estas.
    pero con un valor de UNDEFINE, en este espacio tambien se colocan las funciones declaradas-
    esa se crea en la primer fase en la 2 fase(Fase de ejecucion) se saca el valor de var y se ejeuta las instruiccion. (../_src/assets/02-JavaScriptAvanzado-I/imag/hoisting.png)

   >fase 2: FASE DE EJECUCIÓN:
   En esta se ejecuta el codigo, aui tiene lugar la asignacion de valores en las variables globales
   aca no se INVOCA FUNCIONES hasta que se invoca en su propio contexto de ejecucion

   <CONTEXTO DE EJECUCION DE FUNCIONES>
    Cuando invocamos una funcion -> nombreDeFuncion() <- esta crea su CONTEXTO DE EJECUCION DE FUNCION, esta tambien tiene la misma fase de <creacion y ejecucion>  

   >FASE DE EJECUCION DE FUNCIONES:
   En esta es cuando llama al argumen, los arfumentos pasados por la funcion, cuando un funcion llama a otra funcion <se crea otro contexto de ejecucion> cada uno de los contextos de ejecucion de la fucnion determina el <SCOPE> de las <VARIABLES UTILIZADAS EN LAS FUNCIONES RESPECTIVAS.>

 ## SCOPE
  Como arriba se demuestra, estas estan dentro de la fase de ejecucion de la funcion y es el que se encarga de ver hasta donde llegan las variables en el codigo. Es decir podemos acceder a los valores dentro del escope correspondiente que se cree. 
  Ejemplo de este es nombrar una variable fuera un una funcion, esta es una variable global y se puede acceder de afuera a adentro en las funciones pero no de adentro a afuera 
  cada funcion crea su propio scope

  ## BLOCK SCOPE
  En esta entran las LET Y CONST estas variables, son definidas dentro {} de un bloque solo pueden ser usadas dentro de ese bloque, las variables usadas dentro de un for() solo pueden ser aceddidas dentro de ese bloque, al igual que las SCOPE FUCNTION, no pueden ser accedidas por fuera de ellas.

  Pero nuestra famosa VAR cuando la definimos tiene su SCOPE dentro de la FUNCTION SCOPE o la GLOBAL SCOPE 
  ---EJEMPLO:
        function calcAge(birthyear) {
        const currentYear = 2021;
        const age = currentYear - birthyear;
         if (age <= 60) {
            // Create a variable using "var" inside the block
             var working = true;
            // Create a variable using "const" inside the block
            const message = `Peter is still employed!`;
            console.log(message);
         }
         // Variable created using "var" can be accessed outside the block
         console.log(working); // true
        // Attempt to access "message" outside of the function scope is not possible
        console.log(message); // ReferenceError: message is not defined at calcAge
    }
        calcAge(1975);

 ## SCOPE ANIDADO
    En estos cumple lo de si estan dentro de scope inner pueden acceder de adentro hacia arriba, pero no de afuera hacia adentro. las variables let y cosnt tambien pueden consultarse.
 
