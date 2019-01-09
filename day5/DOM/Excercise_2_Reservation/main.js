const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }



let checkReservation = function(){
  let resname = document.getElementById("resname")
if (reservations[resname.value]){
   const response = document.createElement("h1")
   response.innerHTML = "Welcome, " + resname.value
   document.body.appendChild(response)

}
else {const response = document.createElement("h1")
response.innerHTML = "Sorry you don't have a reservation, " + resname.value
document.body.appendChild(response)}


}


