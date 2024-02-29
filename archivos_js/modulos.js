    
    
     console.log
     ("****************************** MODULOS (IMPORT/EXPORT)********************************");
    
    
    import regards, {Hola, PI, usuario} from "./constantes.js"
    //De esta manera se esta importando desde el archivo constantes.js, las constantes PI y usuario. Recordar que si se va a importar desde la misma carpeta, se debe agregar ./ el puntos antes de la diagonal indica que es desde la misma carpeta. 

    import{aritmetica} from "./aritmetica.js"//Importamos desde el archivo aritmetica.js

    //Tambien se pueden usar alias agregando la palabra reservada (as) y luego el alias, ejemplo: aritmetica as calculos.

   
    //Se imprimen las importaciones.

    console.log(PI,usuario);//Imprimimos la constante y la variable

    console.log(aritmetica.sumar(30,45));//Imprimimos el objeto que engloba la funcion.
    console.log(aritmetica.restar(100,45.5));

    regards(); //regards fue una funcion exportada de manera default, es decir la funcion saludar, se renombro a default.

    //Imprimimos la importacion de la clase, anadiendola a una variable.
    let Hello = new Hola();// 
    Hello;