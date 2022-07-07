// Strings y metodos------------------------------------------------------------------------------
let tweet = 'incorporando string'

//Length es para saber la extension
console.log(tweet.length)

//IndexOf es para conocer la posicion
console.log(tweet.indexOf)

//Includes retorna true o false
console.group(tweet.includes)


// Objeto Math-----------------------------------------------------------------------------------
let matematicas;

matematicas = math.pi;
matematicas = math.round(2.5)
matematicas = math.ceil(2.1) //Redondea hacia arriba
matematicas = math.floor(2.9) //Redondea hacia abajo
matematicas = math.sqrt(144) //Raiz cuadrada
matematicas = math.min(1,5,7,2,10) //Devuelve el minimo


// Template strings - string literals (concatenacion) --------------------------------------------
let nombre = "Juan";
let email = "juan@gmail.com"

console.log("Cliente: ${nombre} email: ${email}")


// Objetos --------------------------------------------------------------------------------------

let computadora = {
	procesador : "Ryzen 5 2400G",
	memoriaRam: "12gb",
	almacenamiento : "1TB",
	disponible : true
}
console.log(computadora)

//Agregar propiedades al objeto
computadora.imagen = 'imagen.jpg';

//Eliminar propiedades
delete computadora.imagen;

//Destructuring
let {procesador} = computadora;
console.log(procesador)

//Unir objetos con spread operator
let monitor = {
	tamaño: "27 Pulgadas",
	mhz: "144hz",
}

let pcCompleta = { ...computadora, ...monitor };


// Arrays -------------------------------------------------------------------------------------
let frames = [30,60,80,120]

//Conocer extension
frames.array.forEach(frame => {
	console.log(frame)
});

//Array de objetos

let carrito = [
	{nombre: "Pc Gamer 2022", precio: 80000},
	{nombre: "Teclado Razer", precio: 2000},
	{nombre: "Mouse Logitech", precio: 1500},
	{nombre: "Monitor 27", precio: 25000},
]

carrito.forEach(function(compra){
	if(compra == "Pc Gamer 2022"){
		console.log("Si hay PC Xd")
	}
})


// Funciones ----------------------------------------------------------------------------------

function sumar(numero1,numero2){ //numero 1 y 2 son parametros
	console.log(numero1+numero2);
}
sumar(10,10) //Argumento








