const fs = require('fs');
const path = require('path');

const citasPath = path.join(__dirname, 'citas.json');

function registrar(nombre, edad, animal, color, enfermedad) {
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    fs.readFile(citasPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        const citas = JSON.parse(data);
        citas.push(nuevaCita);

        fs.writeFile(citasPath, JSON.stringify(citas, null, 2), (err) => {
            if (err) {
                console.error('Error al escribir el archivo:', err);
            } else {
                console.log('Cita registrada con éxito:', nuevaCita);
            }
        });
    });
}

function leer() {
    fs.readFile(citasPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        const citas = JSON.parse(data);
        console.log('Citas registradas:', citas);
    });
}

module.exports = { registrar, leer };
