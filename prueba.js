"use strict"

function Student (nombre,correo,promedio ) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validarPromedio = function () {
       if (this.promedio >= 70){
        return "aprobado"
     }
     else {
        return "desaprobado"
     }
    };

    this.obtenerUsuario = function () {
        let usario = this.correo.indexof("@");
        let nombreUsuario = this.correo.slice(0,usario);

        return nombreUsuario
     };
     
}

let studentOne = new Student("alexis","narealexis@gmail.com",70);

alert(studentOne.validarPromedio());
alert(studentOne.obtenerUsuario());

//ejercicio 2

let edades = [15, 45, 50];
edades.splice(1,0,22)
for (let i = 0; i < edades.length; i++) {
    if (edades[i] > 25) {
       alert(edades[i]);
    }
}
