//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let res = base * i;
            data += `${base}*${i}=${res}\n`;
        }

        if (!data) {
            reject(`Error en la tabla ${base}`);
        } else {
            resolve(data.red);
        }
    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let res = base * i;
            data += `${base}*${i}=${res}\n`;
        }

        fs.writeFile('tablas/tabla-' + base + '.txt', data, (err) => {
            if (err)
                reject(`Error al crear el archivo de la tabla ${base}`);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}