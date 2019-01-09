
// console.log(block)
// console.log(document)
// const playingField = document.getElementById("playing-field")
// console.log(playingField)

// const down = document.getElementById("down")
// console.log(down)

// console.log(down.innerHTML)
// down.innerHTML = "DOWN"
// console.log(down.innerHTML)

// playingField.style.backgroundColor = "blue"

// document.getElementById("block").style.backgroundColor = "yellow"



// const moveRight = function(){
//     const block = document.getElementById('block');
//     let left = parseInt(block.style.left) || 0;
//     left += 15;
//     block.style.left = left +'px'; 
// }
/*
const header = document.createElement("h1")
header.innerHTML = "The best game ever"
header.style.color = "purple"
header.style.fontFamily = "Arial"
header.setAttribute("class", "my-header")
document.body.appendChild(header)


const subHeader = document.createElement("h2")
subHeader.innerHTML = "Woohoo"
subHeader.setAttribute("class", "subhead")
document.body.appendChild(subHeader)

const enterColor = function () {
    playingField.style.backgroundColor = "#8e44ad"
    
}

const leaveColor = function() {
    playingField.style.backgroundColor = "#c0392b"
}

const list = document.getElementById("list")
const addItem = function(){
    const newItem = document.createElement("li")
    newItem.innerHTML = "New shit"
    list.appendChild(newItem)


}



const block = document.getElementById("block")
block.onclick = function (){
    block.innerHTML = "clicked"
}

block.onmouseenter = function () {
    block.style.backgroundColor = "purple"
}

const box = document.createElement("div")
box.setAttribute("class", "box")
box.onclick = function(){
    box.innerHTML = "YES!"
}
document.getElementById("some-id").appendChild(box)
*/
// EXCERCISE 1 COMPLETING THE GAME

const block = document.getElementById("block")

               

const down = document.getElementById("down")
down.onclick = function (){
    if(!block.style.top || parseInt(block.style.top) < 405 ){
        const block = document.getElementById('block');
        let down = parseInt(block.style.top) || 0;
        down += 15;
        block.style.top = down +'px'; 
    }
}
const up = document.getElementById("up")
    up.onclick = function (){
        if( parseInt(block.style.top) > 0){
            const block = document.getElementById('block');
            let up = parseInt(block.style.top) || 0;
            up -= 15;
            block.style.top = up +'px'; 
        }
    }
const left = document.getElementById("left")
        left.onclick = function (){
            if(parseInt(block.style.left) > 0){
                const block = document.getElementById('block');
                let left = parseInt(block.style.left) || 0;
                left -= 15;
                block.style.left = left +'px'; 
            }
        }

 const right = document.getElementById("right")
            right.onclick = function (){
                if(!block.style.left || parseInt(block.style.left) < 405){
                    const block = document.getElementById('block');
                    let right = parseInt(block.style.left) || 0;
                    right += 15;
                    block.style.left = right +'px'; 
                }
            
            }
            

