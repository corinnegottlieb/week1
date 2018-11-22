/*
let names = ["bob", "sue", "ned", "todd"]
let ages = ["10", "20", "30", "40"]



for(let i = 0; i < names.length; i++) {
   console.log(names[i] + " is " + ages[i] + " years old")
}


let array = [1 , 2 , 3]
let sum = 0

for(let i=0; i < array.length; i++){
    sum = sum += array[i]
}
console.log(sum)
console.log(sum/array.length)


let nums = []
let number = 1
while (number < 101){
    nums.push(number++)  
}
console.log(nums)



 
for(let i =0; i < nums.length; i++ ){
   if (nums[i] % 2 === 1) {
       nums.splice(nums[i],1)
}
}
console.log(nums)



const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []




for(let i = 0; i < names.length; i++) {
    people.push({name:names[i], age:ages[i]})

     }
    console.log(people)


for(let i = 0; i < names.length; i++) {
console.log(people[i].name + " is " + people[i].age + " years old")
}


const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]

for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === 2) {
        posts.splice(i, 1)
    }
}
console.log(posts)

const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []},
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [{id: 1, text: "Idiot has no idea"}, {id: 2, text: "I agree!"}, {id: 3, text: "Fool!"}]
    },
    {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []}
  ]

  let x = posts[1].comments
  for (let i = 0; i < x.length; i++) {
    if (x[i].id === 2) {
        x.splice(i, 1)
    }
}
console.log(x)
*/

const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  