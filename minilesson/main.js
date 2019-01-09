// people_info = [
//     {
//         name: "guido",
//         profession: "bungalow builder",
//         age: 17,
//         country: "canaland",
//         city: "sydurn",
//         catchphrase: "what a piece of wood!"
//     },
//     {
//         name: "petra",
//         profession: "jet plane mechanic",
//         age: 31,
//         country: "greenmark",
//         city: "bostork",
//         catchphrase: "that's my engine, bub"
//     },
//     {
//         name: "damian",
//         profession: "nursery assistant",
//         age: 72,
//         country: "zimbia",
//         city: "bekyo",
//         catchphrase: "with great responsibility comes great power"
//     }
// ]

// const getSummary = function (person) {
//     let summary = ""
//     summary += capitalize(person.name)
//     summary += ` is ${getAge(person.age)}`
//     summary += capitalize(person.profession)
//     summary += getPlace(person.city, person.country)
//     summary += getCatchphrase(person.name, person.catchphrase)
//     return summary
// }

// const capitalize = function (str) {
//     let capitalizedStr = ""
//     capitalizedStr += str[0].toUpperCase();
//     capitalizedStr += str.slice(1);
//     return capitalizedStr
// }

// const getAge = function (num) {
//     let age = ""
//     if (num < 21) {
//         age += " an underage "
//         return age
//     }
//     if (num > 55) {
//         age += " a 55+ "
//         return age
//     }
//     else {
//         age += ` a ${num} year old `
//         return age
//     }
// }

// const getPlace = function (city, country) {
//     let place = ""
//     place += ` from ${capitalize(city)}, ${capitalize(country)}.`
//     return place
// }

// const getCatchphrase = function (name, catchphrase) {
//     let sentence = ""
//     sentence += ` ${capitalize(name)} loves to say ${catchphrase}`
//     return sentence
// }


// for(let i in people_info){
//     console.log(getSummary(people_info[i]))
//     }
    

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const lowStr = story.toLowerCase();
const split = lowStr.split(" ");
const countWords = function (char) {
    let myCount = 0;
    for(let i = 0; i < split.length; i++) {
        if (char === split[i]) {
            myCount++;
        }
    }
    wordCounts[char] = myCount;
};
const storyLine = function () {
    for (let i = 0; i < split.length; i++) {
        countWords(split[i])
    }
    console.log(wordCounts);
};

storyLine()