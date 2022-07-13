const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        description: 'Base de la tabla',
        demandOption: true,
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        description: 'Listar tabla de multiplicar',
        default: false,
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base debe ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;