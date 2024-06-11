import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = "ert";
export const giphyAPi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    apiKey: apiKey,
  },
});
// giphyAPi.get<GIFResponse>('/random')
//  .then(resp => console.log(resp.data.data.images.downsized_large.url))
//  .catch(err => console.log(err));
