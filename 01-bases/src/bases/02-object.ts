export const person = {
  lastName: 'Stark',
  age: 45,
  adress: {
    city: 'New York',
    zip: 3576,
    lat: 3675,
    lng: 46578}
};
//? Nosotros podemos cambiar valores de persona, aunque sea una constante, dado que lo que realmente no se puede cambiar es el objeto, por ejemplo:
person.age = 44;
//! person = {}; No se puede asignar a "person" porque es una constante.ts(2588)
//? Si queremos que nada pueda cabiar de valor podemos poner 'as const para que sea inmutable:
const personFix = {
  lastName: 'Stark',
  age: 45,
  adress: {
    city: 'New York',
    zip: 3576,
    lat: 3675,
    lng: 46578}
} as const;
// personFix.age = 33; No se puede asignar a "age" porque es una propiedad de solo lectura.ts(2540)
const person2 = person;
person2.lastName = 'Parker';
console.log({person});
console.log({person2});


//? Podemos observar que al cambiar el lastName de person2 tambien hemos cambiado el lastName de person, porque los dos objetos apuntan al mismo, es decir, que todos los objetos en javascript se pasan por referencia...
//? Podriamos hacer esto:
//const person3 = {...person};
//person3.adress.city = 'LA';
//? Tampoco crearia una copia la cual nosotros podriamos mdificar sin alterar a la otra, porque las propiedades en si se podrian cambiar pero el objeto de la propiedad city seguiria apuntando al mnismo de person.
//? La forma correcta seria utilizando structuredClone()...
const person3 = structuredClone(person);
person3.adress.city = 'MS';
console.log({person3});