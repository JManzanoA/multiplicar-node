const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//EJEMPLO CON UN PARÁMETROS DEFINIDO EN EL CÓDIGO
//let base = '57t58';
//console.log(process.argv);
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/

//EJEMPLO ENVIANDO PARÁMETROS DESDE LA CONSOLA
/*let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/




//EJEMPLO ENVIANDO PARÁMETROS DESDE LA CONSOLA USANDO YARGS
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            //.then(resp => console.log(`${resp}`))
            //.catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}
//console.log(argv.base);

//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/