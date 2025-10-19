const elements = [1, 2, 3]
const otherElements = [4, 5, 6]

const newAarray = [...elements]
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newAarray.push(element)
    
}

const rta = elements.concat(otherElements)
const rta2 = [...elements,...otherElements]
const rta3 = [...elements, 'random']

console.log('for',newAarray)
console.log('concat',rta)
console.log('...', rta2)
console.log('rta3', rta3)

//modificar el array con soread operation para no crear otro array
elements.push(...otherElements)
console.log(elements)