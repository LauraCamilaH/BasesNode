const fs = require(`fs`);
let numero = 3;

let guardar = multiplicar(numero)

fs.writeFile (`tablas/tablaMultiplicar${numero}.txt`, guardar , (err) => {

    if (err) throw err;

    console.log(`informacion guardada archivo creado tabla ${numero}!!`);
})


function multiplicar(base) {
    let tabla = ''
    for (let i = 1; i <= 10; i++) {
        let resultado = i * base
        tabla += (`${base} * ${i} = ${resultado} \n`)
    }
    return tabla
}

// crearArchivo(numero)
//     .then( archivo => console.log (`archivo creado: ${numero} `))

