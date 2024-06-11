//* DESESTRUCTURACION CON AREGLOS

//? Funciona practicamente igual que con los objetos solo que hay una pequeña diferencia:

const character = ["Goku", "Vegeta", "Trunks", "Goten"];
//* La desustructuracion consiste en cojer un valor de un arreglo y definir una variable con ese valor
//! Atencion, recordar que para desestructurar un objeto es con '{}' y para desestructurar un arreglo es con '[]'
const [p1, p2, p3, p4] = character;
console.log({ p1,p2,p3,p4});
//* Como podemos ver, hemos desestructurado el arreglo en 4 variables que son p1,p2,p3 y p4, las cuales son los elementos de el arreglo character en su orden original. Por esta razon, al hacer console.log({p1}) sale goku y no cualquier otro.

const [, per2, , per4] = character;
console.log({ per2, per4 });
//? En este caso solo hemos cojido los elementos 1 y 3 del arreglo. Como? Para poder cojer elementos sin cojer a otros podemos poner ',' vacias para indicar que no queremos este elemento y seguir el orden de posicion de las elementos del areglo.

//* Tambien podriamos añadir algun elemento a la desestructuracion, por ejemplo, podemos añadir a Yamoshi como heroe elemental:
const [, hero2, , hero4, heroElemental = "Yamoshi"] = character;
console.log({ hero2, hero4, heroElemental });
export {};

//* Ahora vamos a contruir una funcion flecha que va a devolver un arreglo, y desestructuraremos si retorno (el arreglo).

const returnArray = () => [123, "ABC"] as const;
const [numbers, letters] = returnArray();
console.log(numbers, letters.toLowerCase());

//? En este ejemplo de desestructuracion de arreglos, podemos ver que si ponemos as const al final lo convertimos en una tupla, la cual nos va a permitir que typescript infiera el tipo de datos de cada uno de los elementos en su orden.

//! Sin el 'as const', no podriamos haber usado el metodo 'toLowerCase()', dado que 'letters' podria haber sido tanto number como string.
/**
 *? const returnArray2 = () => [
 *?  123, 'ABC'
 *?  ];
 *? const [numb,lett] = returnArray2();
 *!  console.log(numb,lett.toLowerCase()); La propiedad 'toLowerCase' no existe en el tipo 'string | number'.
 *!  La propiedad 'toLowerCase' no existe en el tipo 'number'.ts(2339)*/
