// https://bobbyhadz.com/blog/typescript-this-implicitly-has-type-any

// https://blog.amatiasq.com/2012/01/conceptos-basicos-this-call-apply/

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this

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

objectA.myMethod()
objectB.myMethod()

/*
La regla de oro dice -> el objeto this pasado a 
una función es el objeto que esta antes del punto
que precede a los parentesis que invoca a la función

En el caso anterior se pasa el objeto this de objectA y objectB
*/

// Casos mas complejos -> namespaces
// amq.test.StringHelper.firstToUpperCase('myname')
// el valor the this es StringHelper por la regla de oro

// pero y si no hay punto? si la función no está en ningún objeto?

function testScope(this: any) {
    console.log(this)
}
testScope();

// en este caso el contexto es el objeto global en un navegador sería window

//Callbacks
function esperarUnSegundo(callback: any) {
    setTimeout(function() {
      callback();
    }, 1000);
  }


  var alice = {
    nombre: "Alice",
    cansarse: function() {
      console.log(this.nombre + " se ha cansado de esperar");
    }
  };
  //esperarUnSegundo(alice.cansarse);

  // no funciona, el que ejecuta la función es callback, que pasa que la función la hemos extraído del objeto
  // alice. pero al extraerla la hemos desvinculado
  // métodos de función

var metodoDeFunction0 = alice.cansarse
esperarUnSegundo(metodoDeFunction0.call(alice))

var metodoDeFunction = alice.cansarse.bind(alice)
esperarUnSegundo(metodoDeFunction)