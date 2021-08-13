
const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

console.log(process.argv)
const [, , arg3 = 'base=5'] =  process.argv;
const [, base = 5] = arg3.split('=');
// console.log(base);



// const base = 10;

crearArchivo( base )
    .then( archivo => console.log(archivo, 'creado') )
    .catch( err => console.log(err));
