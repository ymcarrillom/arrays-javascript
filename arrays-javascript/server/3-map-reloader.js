const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
console.log('original', orders)
const valor = orders.map(item => item.total)
console.log('rta', valor)

// const valor2 = orders.map(item => {
//     item.tax = .19
    
//     return item
// })
// console.log('original', orders)
// console.log ('valor2', valor2)

const valor3 = orders.map(item => {
    
    return {
      ...item,
      tax: .19
    }
})

console.log ('valor3', valor3)
console.log('original', orders)