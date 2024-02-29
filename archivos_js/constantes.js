
export const PI = Math.PI; //Escribiendo la palabra export antes de una variable o constante, exportamos ese fragmento de codigo, para que sea usado en otro archivo o modulo, Para este caso la constante PI.

export let usuario = "Jon";
let password = "qwerty";

//export default permite exportar codigo sin nombre, y permite renombrarlo al importalo, solo se permite tener un export default en el documento.
export default function saludar(){

    console.log("Hola Modulos")
}


//Tambien se pueden exportar clases

export class Hola {

  constructor(){

    console.log("Hola Clases");
  }

}

