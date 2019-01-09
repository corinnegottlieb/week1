



const validate = function ()  {
    let name = document.getElementById("name")
  if (name.value.length<2)  {
  const nameFix = document.createElement("h1") 
  nameFix.innerHTML = "Sorry your name must be longer than two characters"
document.body.appendChild(nameFix)
  }
  let salary = document.getElementById("salary")
  if (salary.value < 10000 || salary.value > 16000){
    const salaryFix = document.createElement("h1")
    salaryFix.innerHTML = "Salary must be between $10,000 and $16,000"
    document.body.appendChild(salaryFix)
  }
  let birthday = document.getElementById("birthday")
  if(!birthday.value){
    const bdayFix = document.createElement("h1")
    bdayFix.innerHTML = "Please enter a valid birthday"
    document.body.appendChild(bdayFix)
  }
  let phone = document.getElementById("phone")
  if(phone.value.length !== 10){
    const phoneFix = document.createElement("h1")
    phoneFix.innerHTML = "Phone number must be 10 digits  long"
    document.body.appendChild(phoneFix)
  }

  else {
   document.getElementById("form").style.display="none";
    const welcome = document.createElement("h1")
    welcome.innerHTML = "WELCOME!"
    document.body.appendChild(welcome)
  }
}