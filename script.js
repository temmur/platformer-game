let arr = [2,5,8,6]
let sum = null
for(let i = 0; i<arr.length; i++){
    sum = sum + arr[i]
}
console.log(sum)

let fruits = ['apple', 'banana', 'pineapple', 'lime']

for(let i = 0; i < fruits.length; i++){
    console.log(`${fruits[i]}, ${i}`)
}



let arrData = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i<arrData.length; i++){
    if(arrData[i] % 2 == 0){
        console.log(arrData[i])
    }
}


let numbers = [10, 20, 30, 40]
let total = 0

for(let i=0; i < numbers.length; i++){
    total+=numbers[i]
}

let average = total / numbers.length

console.log(average)



const API_URL = `https://jsonplaceholder.typicode.com`

const loadUsers=async(users)=> {
    try{
        const response = await fetch(`${users}/users`)
        const data = await response.json()
        
    }catch{

    }
}