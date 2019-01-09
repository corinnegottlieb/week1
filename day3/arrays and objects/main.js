/*p1 = {
    name: "bob",
    age: 30,
    city: "TLV"
}

p2 = {
    name: "sue",
    age: 30,
    city: "TLV"
}

if (p1.age === p2.age){
    if (p1.city === p2.city){
    console.log("jill wanted to date rob")}
    else {
        (console.log("jill wanted to date rob, but couldnt"))}
}


let animals = [
   {dog:1},
   {cat:2}
]
let myList = [
    {dog: {name: "bob", age: 5}},
    {cat: {name: "sam", age: 3}}
]

myList[0].dog.age = 3

console.log(myList[0])
myList.splice(1)
console.log(myList)

let mySecond = [
    {bird: {name:"sue", age: 7}},
    {mouse: {name:"fred", age: 1}}
]
myList.push(...mySecond)
console.log(myList)


let library = {
    books: [ {title: "A", author: "AA"},
            {title: "B", author: "BB"}]
    }
myList.push(library)
console.log(myList)

// const reservation = {
//     bob: {claimed: false},
//     ted: { claimed: true}
// }
// const name = prompt("Please enter the name for your reservation").toLowerCase()


if (reservation[name] && !reservation[name].claimed){
    console.log("Welcome")
}
else if (reservation[name] && reservation[name].claimed) {
    console.log("Sorry, your table has been taken")
}
else (reservation[name] = {claimed: true})
console.log(reservation)



if (reservation[name]) {
    if(!reservation[name].claimed){
        console.log("Welcome")
    }
    else (console.log("Sorry, your table is taken"))
}
else (reservation[name] = {claimed: true})
console.log(reservation)