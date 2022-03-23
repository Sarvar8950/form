import React from 'react'

export default function Showdata({name,age,department,address,isMarried}) {
    
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Department : {department}</p>
      <p>address : {address}</p>
      <p>Maritual Status : {isMarried === true ? "Married" : "Not Married"}</p>
    </div>
  )
}
