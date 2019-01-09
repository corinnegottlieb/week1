


// EXCERCISE 3 ***WRONG WAY DIDNT USE 'THIS'****

const getRandomColor = function () {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
}

const numBox = 6

const enterColor = function (element) {
  element.style.backgroundColor = getRandomColor()
}

const addBox = function () {
  for (i=0; i< numBox; i++){
const box = document.createElement("div")
box.setAttribute("id", "box")
document.getElementById("container").appendChild(box)
box.style.backgroundColor = getRandomColor()
box.onmouseenter = function() {
  enterColor(box)
}
}
}


 
addBox()



// extension




// const niceJob = function(){ 
//   document.createElement("h1")
// niceJob.innerHTML = "Nice Job!"
// document.body.appendChild(niceJob)
// }

// const sameolors = function(){
//   if (addBox.style.backgroundColor === addBoxOne.style.backgroundColor === addBoxTwo.style.backgroundColor)
  
// return niceJob()
 
// }


