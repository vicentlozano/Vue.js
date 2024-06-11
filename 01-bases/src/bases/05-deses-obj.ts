//* DESESTRUCTURACION DE OBJETOS
interface Hero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

const person = {
  name: "Tony",
  age: 45,
  codeName: "Ironman",
};
console.log(person.name);
console.log(person.age);
console.log(person.codeName);
console.log({
  name: person.name,
  age: person.age,
});
//* Como vemos, para mostrar las propiedades de un objeto es un poco tedioso trabajar de esta manera. La desestructucturacion nos va a permitir obtener o mostrar las propiedades de una manera mas rapida y eficiente.

//const {age,name, power = 'No tiene poder'} = person; // puede ser un objeto o un arreglo

//! Como podemos ver, en la consola funcionara pero tenemos un error , ja que en el objeto person no tenemos una propiedad power...
//* Para eso podemos usar las interface, donde podemos describir la estructura de los objetos.

const person2: Hero = {
  name: "Jason",
  age: 44,
  codeName: "Aquaman",
};


//* Para desestructurar un objeto usamos '{}'
const { age, name, power = "No tiene poder" } = person2;
console.log({ age, name, power });

interface CreateHeroArgs {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

const createHero = ({ name, age, codeName, power }: CreateHeroArgs) => ({
  id: 123123,
  name: name,
  age: age,
  codeName: codeName,
  //? La doble interrogacion nos permite comprobar si es nulo y poner un valor por defecto.
  //? Es parecido a la toble tuberia '||' pero tiene mas consideraciones, como undefined, empty, void, etc...
  power: power ?? "No tiene poder",
});

console.log(createHero(person));
export{};