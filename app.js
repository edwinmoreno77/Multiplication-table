const { createFile } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

const colors = require('colors');



console.clear();

createFile(argv.b, argv.l, argv.u)
    .then(fileName => console.log(`Created file: ${fileName}`.yellow))
    .catch(err => console.log(err));








// ejemplo educativo para entender de donde provienen los argumentos

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(arg3);

// const base = 9;