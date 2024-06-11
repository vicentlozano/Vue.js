import { GIFResponse } from "../interfaces/gif.response";

export const apiKey = "OyM07mKNg8221O5nudteG6CdSEJ7VrcY";
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then((body: GIFResponse) =>
    console.log(body.data.images.downsized_medium.url)
  )
  .catch((err) => console.info(err));
//* Esto seria una forma de hacer peticiones http ...