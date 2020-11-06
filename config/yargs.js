const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }

    //recibe la configuracion de parametr
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multipliar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}