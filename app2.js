const argv = require('./config/yargs').argv; // comandos  node app2 listar --limite 5 -b 3
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0]; // guion bajo para hacer refencia al array

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite )
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo.green} `))
            .catch(err => console.log(err))
        break;
    default:
        console.log("comando no conocido");

}



//console.log( argv )


//console.log(process.argv)

//let argv2 = process.argv;

//console.log("limite ", argv.limite);
//console.log(argv.base);
// let parametro =argv[2]; //los arreglos incian en 0
// let base = parametro.split('=')[1];



