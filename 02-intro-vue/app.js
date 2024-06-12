const { createApp, ref } = Vue;

const app = createApp({
  template: `
    <h1>{{message}}</h1>
    <p>{{author}}</p>
    `,
  setup() {
    const message = ref("I'm Batman");
    const author = ref("Bruce Wayne");
    setTimeout(() => {
      message.value = "Hola, soy Goku";
      author.value = "Goku";
    }, 1500);
    return { message, author };
  },
});

app.mount("#myApp");

//? Para que sirve esto ? Porque no instalamos vue.js en nuestro entorno ?

//* Esto puede ser util para trabajar con vue.js sin instalar nada ni poner paquetes de sobra en algunos casos. Por ejemplo, si solo queremos que un componente sea de vue, como un formulario, con solo la linea del script y el archivo app.js podemos conseguir esto, podiendo integrarse perfectamente con un projecto de react, angular etc.

//* Cabe destacar, que hemos desestructurado el objeto Vue, para poder acceder a sus funciones y demas caracteristicas.

//* Utilizamos ref para hacer una variable reactiva.
