import React from 'react'
import Todo from './Todo'

function Todolist() {
    

    let[people,setPeople] = React.useState([])
    let[fn,setFn] = React.useState([""])
    let[ln,setLn] = React.useState([""])
    let[age,setAge] = React.useState([""])
    let[city,setCity] = React.useState([""])
    
    function handleClick(){
       let personObj ={
        FirstName:fn,
        LastName:ln,
        Age:age,
        City:city,
       }
       setPeople([...people,personObj])
    }
    // console.log(people)
    
  return (
    <div>
        <h1>Todolist</h1>
       FirstName : <input type="text" onKeyUp={(e)=>{setFn(e.target.value)}} />
       LastName : <input type="text" onKeyUp={(e)=>{setLn(e.target.value)}} />
       Age : <input type="text" onKeyUp={(e)=>{setAge(e.target.value)}} />
       City : <input type="text" onKeyUp={(e)=>{setCity(e.target.value)}} />
        <button onClick={handleClick}>Save</button>
       <table border="1">
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>City</th>
            </tr>
            {
                people.map((person,i)=>{
                    return(
                        <Todo person={person} key={i} ></Todo>
                    )
                })
            }
       </table>
        
    </div>
  )
}

export default Todolist