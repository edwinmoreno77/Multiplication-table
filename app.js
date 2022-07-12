const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs').argv;

console.clear();


// console.log(process.argv);


// de forma educativa para entender de donde provienen lodos argumentos

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(arg3);





// const base = 8;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo}`))
//     .catch(err => console.log(err));