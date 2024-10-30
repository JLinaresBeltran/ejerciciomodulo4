// Alcance global
var globalVar = "Soy una variable global";
let globalLet = "Tambien soy global, pero tengo un alcance con let";
const globalConst = "Soy una cosntante global"


{
//Alcance de bloque
var blockVar = "Soy una var con alcance de bloque";
let blockLet = "Soy una let con alcance de bloque";
const blockConst = "Soy una const con alcance de bloque";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "Soy una var con alcance de bloque";
    let functionLet = "Soy una let con alcance de bloque";
    const functionConst = "Soy una const con alcance de bloque";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError