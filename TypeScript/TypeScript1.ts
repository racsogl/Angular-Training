/**
 * Tipos
 * String 
 * Boolean
 * Number
 * Array
 * Tuplas
 * Enums
 * Any
 * Void
 */

let cadena: string = 'Nombre'

let edad: number = 25

let lista: Number[] = [1,2,3]
let lista2: Array<Number> = [1,2,3]

let tupla: [String, Number]
tupla = ['David', 25]
console.log(tupla[0])
tupla[1] = 18
console.log(tupla[1])

enum Animales {Perro, Gato = 58, Pajaro = "carpintero"};
let animal: Animales = Animales.Gato
let tipoDePajaro: Animales = Animales.Pajaro
console.log(animal)
console.log(tipoDePajaro)
console.log(Animales[0])////????

export enum Fruits {
    apple = "apple",
    orange = "orange",
}
  

// para trabajar con librerias externas 
let cualquiera: any = true
// solo solo permite guardar undefined o null
let nada: void = undefined

/*Clases*/
class NombreClase {
    private _propiedad: string;

    // solo permite un constructor
    constructor(propiedad: string) {
        this._propiedad = propiedad
    }

    get propiedad(): string {
        return this._propiedad
    }

    set propiedad(propiedad: string) {
        this._propiedad = propiedad
    }

    printMsg(): string {
        return `Esta clase tiene ${this._propiedad}`
    }
}

// De donde sale this
// https://blog.amatiasq.com/2012/01/conceptos-basicos-this-call-apply/

function myFunction(this: any) {
    console.log(this.name);
}
  
 var objectA = {
    name: "Alice",
    myMethod: myFunction
 };
  
var objectB = {
    name: "Bob",
    myMethod: myFunction
};
  
// los dos metodos apunta a myFunction
console.log(objectA.myMethod())
console.log(objectB.myMethod())



