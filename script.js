// Objeto literal anidado
let auto = {
    marca: "honda" ,
    tipo: "sedan" ,
    adicional : {
        aire: "si" ,
        frenos: "si" ,
        luces: "si" ,
        seguro: "no" 
    } ,
    origen: "argentina" ,
    precio: 1500000
} ;
console.log("Marca: " + auto.marca) ;
console.log("Tipo: " + auto.tipo) ;
console.log("Aire Acond.: " + auto.adicional.aire) ;
console.log("Frenos ABS: " + auto.adicional.frenos) ;
console.log("Luces Alógenas: " + auto.adicional.luces) ;
console.log("Incluye Seguro: " + auto.adicional.seguro) ;
console.log("Origen: " + auto.origen) ;
console.log("Precio: " + auto.precio) ;

console.log("Marca: " + auto["marca"]) ;
console.log("Tipo: " + auto["tipo"]) ;
console.log("Aire Acond.: " + auto.adicional.aire) ;
console.log("Frenos ABS: " + auto.adicional.frenos) ;
console.log("Luces Alógenas: " + auto.adicional.luces) ;
console.log("Incluye Seguro: " + auto.adicional.seguro) ;
console.log("Origen: " + auto["origen"]) ;
console.log("Precio: " + auto["precio"]) ;

const producto = {
    1: "resma de papel" ,
    2: "ledesma" ,
    3: "500" ,
}

console.log("Descripcion: " + producto[1]) ;
console.log("Marca: " + producto[2]) ;
console.log("Unidad: " + producto[3]) ;

console.log("Descripcion: " + producto["1"]) ;
console.log("Marca: " + producto["2"]) ;
console.log("Unidad: " + producto["3"]) ;

/** Definiendo métodos dentro
 * del un objeto
 */

const persona = {
    Nombre: "Fernando" ,
    Apellido: "Diaz" ,
    Edad: 50 ,
    Apynom: function() {
        return this.Apellido + " , " + this.Nombre ;
    }
};

console.log("Nombre: " + persona.Nombre) ;
console.log("Apellido: " + persona.Apellido) ;
console.log("Edad: " + persona.Edad) ;
console.log("Apellido y Nombre: " + persona.Apynom()) ;

/** Otra manera de definir el método dentro de un objeto
 * 
 */

const persona2 = {
    Nombre: "Fernando" ,
    Apellido: "Diaz" ,
    Edad: 50 ,
    Apynom: function() {
        x = this.Apellido + " , " + this.Nombre ;
        return x ;
    }
};

console.log("Nombre: " + persona2.Nombre) ;
console.log("Apellido: " + persona2.Apellido) ;
console.log("Edad: " + persona2.Edad) ;
console.log("Apellido y Nombre: " + persona2.Apynom()) ;
