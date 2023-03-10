# SUMAR BINARIOS CON HALF ADDER 

1 1 0 0 1 
  1 1 0 0
  -------
1 0 1 0 1

      1
1 1 0 0 1 
  1 1 0 1
  -------
1 0 1 1 1

1 1
  1 1 0
  1 1 1
 -----
1 1 0 1

A | B | AND  -> carry
--| --| --
1 | 1 |  1
1 | 0 |  0
0 | 0 |  0
0 | 1 |  0

A | B | XOR -> sum
--| --| --
1 | 1 |  0
1 | 0 |  1
0 | 0 |  0
0 | 1 |  1

A | B | OR
--| --| --
1 | 1 |  1
1 | 0 |  1
0 | 0 |  0
0 | 1 |  1

A | NOT
--| --
1 |  0
0 |  1

# BINARIO A DECIMAL

    3    2   1   0    
    1    0   1   1

    2^3 2^2 2^1 2^0
    8   4   2   1
    8 + 0 + 2 + 1 = 11


     1   0   0 
    2^2 2^1 2^0
    4  + 0  + 0 = 4 
  ----------------------
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

En Binario a decimal recibimos un string y retornamos un número
let i = 0 1 2 3 4
                in string "1 1 1 0 0"
pos  str.length - 1        4 3 2 1 0




# Binarios y bytes

2 - > binario -> 0 y 1

2 lugares (espacios) ->  2^2 
00  A
01  B 
10  C
11  D 
 
2 bits



3 lugares (espacios)
2^3 
000
001


byte 8 bits (8 lugares)
2^8 -> 256


unicode
2^32  












# EJEMPLO DE COMO CONVERTIR BINARIOS
En este caso, podemos convertir este número binario a su equivalente decimal utilizando las siguientes operaciones bit a bit:

javascript
Copy code
let exponente = 0;
let numeroDecimal = 0;

while (numeroBinario > 0) {
  if (numeroBinario & 1) {
    numeroDecimal += Math.pow(2, exponente);
  }
  exponente++;
  numeroBinario >>= 1;
}

console.log(numeroDecimal); // imprime 42
En este ejemplo, utilizamos un bucle while para iterar mientras numeroBinario sea mayor que 0. En cada iteración, comprobamos si el bit menos significativo de numeroBinario es igual a 1 utilizando la operación bit a bit & (AND bit a bit) con el número 1. Si es así, calculamos su valor decimal correspondiente utilizando la función Math.pow() y lo sumamos al valor acumulado en la variable numeroDecimal. Para cada bit, incrementamos el valor de la variable exponente, que representa el exponente de 2 correspondiente a ese bit. Luego, desplazamos numeroBinario un bit hacia la derecha utilizando la operación bit a bit >>= (desplazamiento a la derecha con signo) para eliminar el bit menos significativo y continuar con la siguiente iteración.

En resumen, para convertir un número binario representado como un entero a su equivalente decimal en JavaScript, podemos utilizar operaciones bit a bit como la operación & para comprobar si un bit es igual a 1, la operación >>= para desplazar un número hacia la derecha y la función Math.pow() para calcular las potencias de 2.






//En esta vas a sumar binarios tu y despues ejemplos en codigo, tambien puedes colgar la explicacion
//del video del profe español enlaza en la explicacion las png de estae archivo

