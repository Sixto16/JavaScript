function sumar(a,b){
 return a+b;
}

function restar(a,b){
    return a-b;
}


//Englobamos las dos funciones en un objeto literal, de la siguiente manera.
export const aritmetica = {
  
    sumar,
    restar
};

