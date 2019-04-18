const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`tabla del ${base}`.green);
    console.log('===================='.green);
    
    for(let i = 1; i <= limite; i++)
        console.log(`${base} * ${i} = ${base*i}`);
        
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve,reject)=> {

      if (!Number(base)) {
          reject('El valor de la base debe ser un número (entero)');
          return;
      }

      let datos = '';

      for(let i = 1; i <= limite; i++)
          datos += `${base} * ${i} = ${base*i}\n`;

      fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
          if (err) reject(err);
          else resolve(`tabla-${base}.txt`);
      });
  });
};

module.exports = {
    crearArchivo,
    listarTabla
};
