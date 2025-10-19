const elements = ['fire', 'air','water']
let rtaFinal =  '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator 
}

const rta = elements.join('--')
console.log('for',rtaFinal)
console.log('join',rta)

//metodo split

const title = 'curso de manipulacion de arrays'
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal)
