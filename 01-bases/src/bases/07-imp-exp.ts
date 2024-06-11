//* IMPORTACIONES Y EXPORTACIONES
import heroes, { type Owner } from "../data/heroes";

//console.log(owners);
//console.log(heroes.find((h)=>h.name === 'Spiderman'));

//? Que diferencia hay ?
//* En la importacion en '{}', estamos importando solamente un elemento, en este caso la constante owners
//*  A diferencia de la importacion por defecto o clasica que nos va a importar todo los elemetos del modulo.
//? Podemos cambiar el nombre de la importacion dado que solo es un nombre que apunta a una direccion, es decir, podriamos poner import nuestrosHeroes from "../data/heroes"; y el resultado seria el mismo, aunque las convenciones nos dicen que deberia ser el mismo para que resulte mas facil de leer.

/*
 * Tambien podemos utilizar desestructuracion en los imports y podriamos hacer lo siguiente:
 * import heroes, {owners} from "../data/heroes";
 */

export const getHeroById = (id: number) =>
  heroes.find(h => h.id === id);

//console.log(getHeroById(100));

export const getHeroesByOwner = (owner: Owner) =>
  heroes.filter(
    h =>
      h.owner === owner.toUpperCase() ||
      h.owner === owner.charAt(0).toUpperCase() + owner.slice(1).toLowerCase()
  );

//console.log(getHeroesByOwner("MARVEL"));

/**
 *? Que hay que aprender de aqui ?
 ** Si queremos encontrar mas de un elemento ya no utilizamos 'find()' si no 'filter()', dado que find solo nos devolvera el primer elemento que coincida con la busqueda, mientras que filer no devolvera todos los coincidentes
 */
