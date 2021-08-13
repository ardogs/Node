const empleados = [
    { id: 1, nombre: 'Fernando' },
    { id: 2, nombre: 'Linda' },
    { id: 3, nombre: 'Karen' }
];

const salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id) ?.nombre
    return (empleado) ? callback(null, empleado) : callback(`Empleado con id ${ id } no existe`)
}

const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id === id) ?.salario
    return (salario) ? callback(null, salario) : callback(`El empleado con id ${id} no ha sido encontrado`);
}

const id = 3;
getEmpleado(id, (err, empleado) => {

    if (err) return console.log(`Error: ${err}`);

    getSalario(id, (err, salario) => {
        if (err)
            return console.log(`Error: ${ err }`)

        // console.log(salario.salario);
        console.log(`El empleado ${ empleado } tiene un salario de: ${ salario }`)

    })

});