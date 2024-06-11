const numberArray = [1,2,3,4,5];
numberArray.push(6);
//?Recordemos que si ponemos as const en la declacion sera inmutable ejemplo:
const numberArray2 = [1,2,3,4,5] as const;
//! numberArray2.push(6); La propiedad 'push' no existe en el tipo 'readonly [1, 2, 3, 4, 5]'.ts(2339)
const numberArray3 = structuredClone(numberArray);
numberArray3.push(7);
console.log({numberArray3});
//? En TypeScript , si intentamos colar un string en la array de numeros lo transpilara al javascript, pero a la hora de hacer un build y compilar el proyecto nos dira el error y no nos dehara.
//?Si queremos hacer un arreglo con string y numeros, tenemos que especificarlo y se hara de esta forma:
const numberArray4: (string|number)[] = structuredClone(numberArray);
//? Aqui especificamops que el arreglo puede contener numeros o strings.
numberArray4.push('hola');
//?Como vemos, si nosotros lo creamos la primera vez con tipos de datos distintos, typescript detectara que se trata de u arreglo en el que puede haber string o numeros.
const numberArray5 = [1,2,3,4,5,'hola'];
console.log({numberArray4});
const numberArray6 = numberArray.map( value =>{
    return value.toString()
});
console.log({numberArray6});
console.log({numberArray},{numberArray5},{numberArray2});

export {};