const elements = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < elements.length; i++){
    const element = elements[i];
    console.log('desde for', + element)
}

elements.forEach(element=> console.log('desde forEach', +element)
)



  