const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    type: 'boolean',
    desc: 'Da como completado toda la tarea por hacer',
};


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion,
    })
    .command('listar', 'Lista todas las tareas que hayamos o no cumplido', {
        completado,
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv,
};