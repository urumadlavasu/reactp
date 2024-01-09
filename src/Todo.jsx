import React from 'react'

function Todo({person,key}) {
 return(
    <tr>
        <td>{person.FirstName}</td>
        <td>{person.LastName}</td>
        <td>{person.Age}</td>
        <td>{person.City}</td>
    </tr>
 )
}

export default Todo