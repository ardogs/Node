const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regerenación',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${ this.nombre }`;
    }
};



function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    console.log(nombre, apellido, poder, edad)
}

// imprimeHeroe(deadpool);
//console.log(nombre, apellido, poder)
//console.log(deadpool.getNombre());

const heroes = ['Deadpool', 'Superman', 'Batman'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [, , h3] = heroes;

console.log(h3);