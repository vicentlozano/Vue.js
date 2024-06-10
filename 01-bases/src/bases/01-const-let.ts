//! Intentaremos siempre que creemos que el valor de la variale no cambiara.
//?Porque no usar let siempre? Las constantes son mas ligeras y ams rapidas
const firstName = 'Tony';
const lastName = 'Stark';
export const fullName = `${firstName} ${lastName}`;
//console.log(`${firstName}, ${lastName}`);
//! Deberiamos envolver el log en un objeto javascript:
//console.log({firstName,lastName});