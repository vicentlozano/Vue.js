//* PROMESAS
//* La promesas necesitan un argumento, que es una funcion de callback.
//* A su vez, esta funcion de callBack necesitara dos argumentos que seran el resolve y el reject, que son funciones que se utilizan para resolver o rechazar la promesa.
import { getHeroById } from "./07-imp-exp";
import type { Hero } from "../data/heroes";
/**console.log("Inicio");

new Promise((resolve, reject) => {
  //console.log('Cuerpo de la promesa');

  setTimeout(() => {
    //resolve("Mi amigo cumplio");
    reject('Mi amigo no cumplio');
  }, 1000);
}).then((message) => console.log(message))
.catch( errorMessage => console.info(errorMessage))
.finally(() => console.log('Fin de la promesa'));


console.log("Fin");*/

//? Vamo a suponer que tenemos que trabajar con un heroe asincronamente; es decir, imaginemos que mientras se muestra la informacion del usuario necesitamos actualizar la abse de datos incrementando el numero de visitas a este heroe mientras se muestra la informacion al cliente, es decir, de manera asincrona.
const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      hero ? resolve(hero) : reject(`Heroe no encontrado #${id}`);
      
    }, 1500);
  });
};
getHeroByIdAsync(3)
  .then((hero) => console.log("El nombre es ", hero.name))
  .catch(alert);
