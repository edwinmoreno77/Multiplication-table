const fs = require('fs');
const colors = require('colors');


const createFile = async (base = 5, list = false, until = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= until; i++) {

            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i}\n`;

        }

        if (list) {
            console.log('============================='.green);
            console.log('====    Table of:'.green, base, '  ======'.green);
            console.log('============================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/table-${base}-until-${until}.txt`, salida);

        return `table-${base}.txt`;

    } catch (err) {

        throw err;
    }
}

module.exports = {
    createFile
}