const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        description: 'base of table',
        demandOption: true,
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        description: 'list multiplication table',
        default: false,
    })
    .option('u', {
        alias: 'until',
        type: 'number',
        description: 'table limit',
        default: 10,
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'the base must be a number';
        }
        return true;
    })
    .argv;

module.exports = {
    argv
}