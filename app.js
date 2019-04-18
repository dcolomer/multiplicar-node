
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// argv[0] nodejs...el interprete
// argv[1] app.js...el programa
// argv[2] primer parámetro del programa
/*let paramBase = process.argv[2]; // --base=X
paramBase = paramBase.split('='); // [--base, X]
const base = paramBase[1]; // X*/

let comando = argv._[0];
switch(comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log(`Comando no reconocido '${comando}'`);
}

