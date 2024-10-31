let userRol = "admin";
let accesslevel;

if (userRol === "admin") {
accesslevel = "Acceso completo concedido";
} else if (userRol === "manager") {
    accesslevel = "Acceso limitado";
} else {
    accesslevel = "Acceso negado";
}

console.log("Estado de acceso:", accesslevel)

let isLoggetIn = true;
let userMessage;

if (isLoggetIn) {
    if (userRol === "admin") {
        userMessage = "Bienvenido Administrador";
    } else {
        userMessage = "Bienvenido Usuario"
    }
} else {
    userMessage = "Por favor loguearse en el systema";
}

console.log("Mensaje de ususario:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrador";
        break;
    case "manager":
        userCategory = "Administrador";
        break;
    case "subscriber":
        userCategory = "Suscriptor";
        break;
    default:
        userCategory = "Desconocido";

}

console.log("Categoria de Uso:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Autenticado" : "No autenticado";

console.log("Estado de Autenticación:", authenticationStatus);
