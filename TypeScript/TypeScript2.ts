/* Interfaces */

// interface LogInterface {
//     msg:  string
//     date?: number // con ? hace que sea optativo
// }

function Logger(log: LogInterface) {
    console.log(log.msg)
}


let pruebaLog = Logger({msg: "prueba"} );
class PruebaLog implements LogInterface {
    msg: string;
    date?: number | undefined;

    constructor(mensaje: string) {
        this.msg = mensaje
    }

    set setMsg(msg: string) {
        this.msg = msg
    }
}

let pruebaLogClass = new PruebaLog("sdfdsfs")
pruebaLogClass.msg = "Prueba de log "

Logger(pruebaLogClass);

/* Módulos */
// https://stackoverflow.com/questions/32805559/typescript-es6-import-module-file-is-not-a-module-error
// https://lalidiaz.medium.com/sobre-módulos-typescript-6a0d83950775

import {Module1} from './path/Module1'

let modulos: Module1.Validator = new Module1.Validator()
console.log(modulos.validate(3))

/* Namespace */

namespace Validacion {
    // definimos una interfaz para construir una clase
    export interface ValidadorNumero {
        isValid(n: number): boolean
    }

    // implementamos
    export class ValidacionLongitud implements ValidadorNumero {
        isValid(n: number): boolean {
            return true
        }
    }
}

let validador: Validacion.ValidadorNumero = new Validacion.ValidacionLongitud()

// Genericos mejor que any
function compare<T>(arg1: T, arg2: T): T {
    if (arg1 > arg2) {
        return arg1;
    } else {
        return arg2;
    }
}

function compareAny(arg1: any, arg2:any): any {
    return arg1;
}

/* Decoradores o anotaciones */
function Logged(value, context) {
    console.log("Funcion llamada")
}

class Prueba {
    @Logged
    metodo(): boolean {
        return true;
    }
}
