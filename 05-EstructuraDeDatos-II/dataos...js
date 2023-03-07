// Listas enlazadas (linked-list) como funcionan
//hash tables como funciona 
// procoding pagina
//objettos trabajamois , cada objetos es un espacio en memoria
//cada casa tine direccion 
//cada objemrto en memoria tiene una mesita(key)que mandfa la direccion de otra , cuando no tiewne direccion es null
//en tu estructura de datos tenes puntitos 
//ve a la casa primera y mira si tienes puntito y si no entra a esa llaave y 
// mira si busca en la otra casa si tiene puntitostienes otra key ve a esa otra y asi..
//cada objeto tiene referencia a otro objeto
//listas son objetos {}{}{}como puedo acceder a ellas anidaqndolas{{}{}}}

// sintaxis 

// recursion 

const objAnidado = { //sitiene la propiedad liso y me devuleva esa info
    suave:{
        info: [1,2],
        a:2
},
    oscuro:{
        info:[],
        a:55,
    },
    llano:{
        masData:{
            b: null,
            liso: {
                info : [{},{},{}],
            },
        },
    },

};
//creear una funcion oara cceder a estos datos usamos recursion por no tener ninguna apuntador 

function cursiveObject(obj, prop){
    for(const key in obj){
        if(key === prop){
            return obj[key];
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])){ //typeof me dice que tipo de dato es
            console.log("in", suave)
            return recursiveObject(obj[key],prop)
        }
    }//recorrer objetos for in
    return " nose a encontrado"
}

console.log(cursiveObject(objAnidado, "liso"));

//lista enlazada para cada nudo o propiedad se encarga es agregarle un ne
const examPleList = { 
    head:{
        info:[],
        next: {
            info: [],
            next:{
                info:[],
                next : null //no tiene mas datos
            }
        }
    
    }
};
console.log(exaqmpleLisVaciua)
examplelistavacia.heah.next =(info:{})

const examPleListVacia = { 
    head:{

    }};


    class List {
        constructor(){
            this.head = null,
            this._length = 0,  //guion bajo es una propiedad quie no se debe tocar es privada//agrega un contador

        }

    }

    class Node
const listita = new List(),
console.log(listita);

//cada molde necesita su propia instancia reocoorer hasta llegar al bnext null para poder guardar un node
//crear molde lista y crear el molde node
//currrent es el apunmtador this.head referencia
//stack queu  listas enlazadas recursividad y arboles

//lista dobloememte enlazada  tiene un apuntador adelante y otro atraz a fin de recorrer mejor 

//bucle circula de info buscar (mundos de los grafos)


//tablas hash optimizar el espacio mem y la cantidad de datos por guardar para estructurarlo 
///colicion de info
