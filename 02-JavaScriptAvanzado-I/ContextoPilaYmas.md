
//crear mis propios ejemplos y demas...  
//las pilas(slack) son como cargan lso contextos 

 # COMO FUNCIONA JAVA SCRIPT 
  >Soy ONE thread (o un hilo de ejecución)
  >asincronico
  >concurrent
  >non blocking

# JAVASCRIPT TIENE : 
  <tengo una heap(memoria allocation) y una stack que tengo una pila con contextos de ejecución

                GRAFICO

 HEAP      |    STACK     |            WEB API 
           |              |   #DOM
           |              |   #AJAX
           |              |   #SET TIMEOUT
           |              | 

            ---------------------
            EVENT LOOP  

            task (CALLBACK)
            QUEUE

 
 # CALL STACKS (Pila de ejecución)
    Significa que soy un programa de un solo hilo lo que significa
    que tengo una sola callstack y solo puedo hacer una cosa al tiempo
    es decir solo puedo correr un pedazo del codigo a la vez
    STACK es basicamente es una estructura de datos donde graba donde el programa esta
    Es decir si nos paramos en la funcion ponemos algo a la pila
    si retornamos algo de la funcion salimos del top de la pila(stack)
    Esto es lo que en resumen hace la stack
    La llamadas a las funciones las apiladas en la pila y cuando la funcion retorna algo la saca de la pila.
# BLOCKING 
    Que pasa cuando las cosas van despacio?, bloquear lo que hace el codigo lento.
# ASINCRONICO (callbacks asincronicas)
    Lo que significa que cuando corre algun codigo le damos un callback  y lo corremos luego.es decir la manda ala queue.
# WEBAPIS
    Responden a recuest que le en codigo hacer que java no puede, ya que el browser tiene otros ambientes para poder procesar esas recuest.
    |
# CALLBACKS & QUEUE 
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
# EVENT LOOPE
    Aquí entra la even loope hacer su trabajo, el cual es, mirar LA STACK y la TASK QUEUE, y lo que hace es sersiorarse de que la stack este vacia toma lo primero que este ne la queue y la pushea 
    en la stack y se ejecuta.

# CONTEXTO DE EJECUCIÓN
 hola

 # SCOPE
 
 
