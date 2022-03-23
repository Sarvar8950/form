import React from 'react'

export default function Showdata({ name, age, department, address, isMarried }) {

    return (
        <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{department}</td>
            <td>{address}</td>
            <td>{isMarried === true ? "Married" : "Not Married"}</td>
        </tr>
    )
}
