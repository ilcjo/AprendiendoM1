/*ARBOLES 
MODELO DE STACK ultimo que ingresa es lo ultimo en salir y se crea metodos que siga estos 
MODELO DE QUEUE 
MODELOS LINKEDLIST head null aca si se usa objetos que se inserta nodos en objetos y se insert usando next 
DEFINE DIFERENCIAS DE OBJETO Y ARRAY 

ARBOLES (es un grafo de tipo arbol)
es un grafo al fin y alcabo estructura dee datos 
nodos conectados cumpleindo ciertas normas 
Partes : 
ROOT 1 nodo NIVEL 0 
 NODE sus hijos del root NIVE 1
 PARENT
CHILD NODE 
hojas son las qur no tiene hijps eestan solas
BST(BINARIO DE BUSQUEDA)
no se puede ir de hijo a padre 
debe ser padre a hijos 
no contenga ciclos (circular) eso seria un grafo 
debe estar conectados
no puede conectar deos caminos bidireccional 
 binario tiene solo dos hijos
 de busqueda es un tipod e orden para buscar el dato pra tener un acceso muy rapido 
 el identificador es el valor
 simpre los menosres o iugal izq mayores a la derecha partiendo del root y despues del hijo y compara si es menor o mayor a ese valor

UN ARBOL BALANCEADO (INVESTIGAR MAS)
 imag 

 MIN HEAP MIN HEAP
 ORDENARLOS DE MENOS A MAYOR MIN HEAP
 ORDENARLO A MAYOR A MENOS MAX HEAP 

 DFST para reocrrerlo y buscar en todo el arbol BST 
  1. DFS --> depth Fisrt For each 
  como lo va a recorrer 
  esta se divinen en /3 
  POS-TORDER
  L R V
 cuando termne de pasar por las posciiones imprime el valor

  PRE-ORDER
 V L R ->(Value Left y despues Right)
en cada nodo se para y le activa el switch
1. toma el valor 
2. va avanzar a siempre a la izquierda cuando izq termine va despues a la derecha que quedaron pendientes
eel root siempre queda en el principio 
 img 

  IN-ORDER
   L V R 
   empieza a la iz imprime valor y que se posicione a la derecha
   primero impreime el arbol de izq y en el medio el root


  2. BFS ---> bREADTHfISRTfOReACH (bts)
   lo que hace en recorrerlo el arbol bionario de busqueda y lo recorre como modo de lectura
   va de arriba a abjo i de izq a der en linea()niveles

recorrer arboples con recursion

*/ 
// CODIGO }{} trata de hacerlo con obnjeto s
// clases node y arbol 
// root con l y r 
// node tiene data no root


