const fs = require(`fs`);
const colors = require('colors');

let listarTabla = (base, limite = 10 )=>{
console.log("=================================".green);
console.log(`        tabla de ${base}         `.green);
console.log("=================================".green);
    for (let i = 1; i <= limite; i++) {
        let resultado = i * base
        console.log(`${base} * ${i} = ${resultado} \n`)
    }
}
    

let crearArchivo = (base, limite = 10) =>{
    return new Promise ((resolve, reject)=>{
    if (!Number (base)){
        reject ("la base de la multiplicacion no es un numero");
        return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            let resultado = i * base
            data += (`${base} * ${i} = ${resultado} \n`)}

        fs.writeFile (`tablas/tablaMultiplicar${base}.txt`, data , (err) => {

            if (err) 
                reject(err)
            else
                resolve (`tabla ${base}.txt`)
            
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla };

