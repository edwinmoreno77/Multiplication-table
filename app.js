const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');


console.clear();

crearArchivo(argv.base, argv.listar)
    .then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo}`))
    .catch(err => console.log(err));








// ejemplo educativo para entender de donde provienen lodos argumentos

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(arg3);

// const base = 9;