// Pregunta 1

// Crea un array vacio para almacenar los numeros aleatorios
let numerosAleatorios = [];

// Generar 10 numeros aleatorios entre 1 y 100 y agregarlos al array
for (let i = 0; i < 10; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Genera un numero entre 1 y 100
    numerosAleatorios.push(numeroAleatorio);
}

// Mostrar el array resultante en la consola
console.log(numerosAleatorios);


// Pregunta 2

function convertirStringAArray() {
    // Solicitar al usuario que ingrese un string con numeros separados por comas
    const stringNumeros = prompt("Ingrese una lista de numeros separados por comas:");

    // Convertir el string en un array, separando por comas y convirtiendo los elementos a numeros
    const arrayNumeros = stringNumeros.split(',').map(Number);

    // Mostrar el array resultante en la consola
    console.log(arrayNumeros);
}

  // Llamar a la funcion para ejecutar el codigo
convertirStringAArray();

// Pregunta 3

let numeros = [10, 40, 30, 20, 15, 5];

// Ordenar el arreglo de menor a mayor
let numerosOrdenados = numeros.slice().sort((a, b) => a - b);

// Encontrar el número menor y mayor
let numeromenor = Math.min(...numeros);
let numeromayor = Math.max(...numeros);

// Imprimir los resultados
console.log("El arreglo ordenado de menor a mayor:", numerosOrdenados);
console.log("El número menor es:", numeromenor);
console.log("El número mayor es:", numeromayor);