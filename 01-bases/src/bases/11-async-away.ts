//? El async transforma una funcion en una funcion que retorna una promesa

//* Como podemos observar el async seria como poner una nueva promesa manualmente pero simplificado.

//? Que ventaja tiene el async? Nos permite poder ejecutar codigo asincrono como si fuera codigo sincrono.
//? Y las excepciones en el async? Con un try - catch

//? El await nos va a permitir escribir codigo asincrono como si fuera codigo sincrono, lo cual simplificara el codigo y permitira que este sea mucho mas legible.
//* La funcion del await es detener el hilo de la funcion asincrona hasta que este resuelta.

import type { GIFResponse } from "../interfaces/gif.response";
import { giphyAPi } from "./10-axios";

export const getImage = async () => {
  try {
    const resp = await giphyAPi.get<GIFResponse>("/random");
    return resp.data.data.images.downsized_large.url;
  } catch (err) {
    throw "Url no encontrado";
  }
};

// export const getImagePromise = () => {
//     return new Promise( resolve => {
//         resolve('https://url-de-mi-sitio-web/image1.jpg');
//     })
// }
getImage()
  .then((url) => console.log({ url }))
  .catch((error) => console.log(error));

// console.log(getImagePromise());
