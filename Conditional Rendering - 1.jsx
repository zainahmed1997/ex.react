import React from "react"
let Arr = []
function Navbar({age,name}){
 
  
   if(age > 18 ){
    Arr.push(age)
   } if(age > 18 && age < 56 ){
    Arr.push(age)

   } if(age < 56 && name === "john" ){
    Arr.push(age)

   } if(  age != undefined ){
    Arr.push(age)
   
} else{ return <p>age non soddisfatta</p>}

return (
  <div>
    <h2>Benvenuto!</h2>
    {/* Mostra l'età per ogni condizione soddisfatta */}
    {Arr.map((age, index) => (
      <p key={index}>L'età è: {age}</p>
    ))}
  </div>
);
}

export default Navbar











