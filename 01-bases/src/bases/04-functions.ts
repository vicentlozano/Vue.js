function greetPerson(name: string) {
  return `Hola ${name}`;
}
console.log(greetPerson("paco"));
//? Esto es iugal a una constante que es una funcion flecha:
const greetPersonFlecha = (name: string) => {
  return `Hola ${name}`;
};
console.log(greetPersonFlecha("paco"));
//? Si la funcion solamente tiene un retorno podemos simplificarla mucho de esta manera:
const greetPersonFlechaSimplificada = (name: string) => `Hola ${name}`;
console.log(greetPersonFlechaSimplificada("paco"));
//? Si vemos una funcion flecha que inmediatamente despues de la flecha tenemos un parentesis significa que estamos haciendo un retorno implicito de un objeto
const getUser = () => ({
  uid: "ABC-123",
  username: "Tony001",
});
//? Si queremos que reciba algun argumento:
const getUser2 = (uid: string) => ({
  uid: uid,
  username: "Paco",
});
//! Opcionalmente, si tenemos una variable que pedimos como argumento y apunta a una propiedad del objeto podemos simplemente hacerlo asi, aunque mejor de la ptra forma:
const getUser3 = (uid: string) => ({
  uid,
  username: "Paco",
});

console.log(getUser());
console.log(getUser2("paco-123"));
console.log(getUser3("paco-123"));
export {};

//! Cuando hacemos un arreglo, debemos poner un trailing coma al final, aunque no tenga mas propiedades el objeto.
//? Porque? Porque cuando hacemos un commit en el control de verisones si no ponemos la coma, nos cuentara como dos cambios en dos lineas diferentes.
const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
    power: "Super fuerza",
  },
];
//* Si queremos buscar una propiedad de un objeto tenemos el metodo find()
const hero = heroes.find((h) => h.power === "Super fuerza");
//* En typScript, si buscamos o intentamos mostrar un elemento, el cual puede ser undefined, por defecto nos pondra el intrerrogante '?' para indicar que el resultado puede ser undefined y asi evitar errores, no asi con javascript.
//? Esto se llama null check
console.log(hero?.id);
//!console.log(hero.id); "hero" es posiblemente "undefined".ts(18048) (property) id: number
console.log(hero?.power?.toUpperCase());
