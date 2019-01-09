/*
const tellAJoke = function(){
    console.log("knock knock")
}

tellAJoke()

const names = ["bo bob", "sue so", "cat co"]
const timeOfDay = ["Morning", "Afternoon", "Night"]
 
const greet = function(name, timeOfDay){
    console.log("Good " + timeOfDay + "," + name)
}


let currentTime = 1
if (currentTime === 0){
    greet("Bob", timeOfDay[0] )
}
else if (currentTime ===1){
    greet("Bob", timeOfDay[1] )
}
else {greet(name, timeOfDay[2])
}

const createUser = function(name, age){
    const user = {name: name, age: age}
    console.log(user)
}

createUser("Corinne", 27)

const growOld = function(user){
    user.age++}

const calcAge = function(currentYear, birthYear){
    let age1 = currentYear - birthYear - 1;
    let age2 = age1++;
    console.log("You could either be " + age1 + " or " + age2)
 
}
const age = calcAge(2017, 1989)

const isEven = function(number){
    if(number % 2 === 1){
        return false}
    else {return true}
}

console.log(isEven(4))


let numbers = [1, 2, 3, 4, 5, 6]

const oddNumbers = function(numbers){
    for(let i =0; i < numbers.length; i++ ){
        if(!isEven(numbers[i])){
            console.log(numbers[i])
        }}

    
    
}
oddNumbers(numbers)


let array = [1,2,3,4,5,6]
const num = 7
const checkExist = function (array, num){
for(let i = 0; i < array.length; i++){
if (array[i] === num){
return true;
}
else return false}
}

console.log(checkExist(array,2))

let calculator = {
    add: function(sum,diff){return sum + diff},
    subtract: function(sum, diff){return sum-diff}
}
const result1 = calculator.add(20,1)
const result2 = calculator.subtract(30,9)
console.log(calculator.add(result1, result2))
*/


const turnToKing = function(name, money){
    name = name.toUpperCase();
    money = increaseByNameLength(money, name);
    name = makeRegal(name);

    console.log(name + " has " + money + " gold coins")
}
const increaseByNameLength = function(money,name){
    return money * name.length }
const makeRegal = function(){
    return "His Royal Higness, "
}

turnToKing("martin luther", 100) 
