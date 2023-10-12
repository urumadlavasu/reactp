import React from 'react'
import { useGetAllCountriesQuery } from '../../../services/countries'

function Countries() {
   var {isLoading,data}= useGetAllCountriesQuery()
   console.log(isLoading)
  return (
    <div className='mybox'>
        <h1>Countries</h1>
        {
            <ul>
                {
                isLoading && <img src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif" alt="" />
                }
                {
                    data && data.map((country)=>{
                        return <li>{country.name.common}</li>
                    })
                }
            </ul>
        }
    </div>
  )
}

export default Countries