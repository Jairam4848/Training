import React from 'react'
import { useState } from 'react'

const ExampleuseEffect3 = () => {

  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState({ status: false, message: '' })

  const URL = "www.thecocktaildb.com/api/json/v1/1/search.php?s="

  const Fetecheddata = async (apiURL) => {
    try {
      setLoading(true)
      setIsError({ status: false, message: '' })
      const res = await fetch(apiURL)
      const { data } = await res.json()
      setData(data)
      setLoading(false)
      if(!data){
        throw new Error("Data not found")
      }
    } catch (error) {
      setLoading(false)
      setIsError({ status: true, message: error.message || 'Something went wrong please try again' })
    }
  }

  useEffect(() => {
    const correctURL = `${URL}${searchTerm}`
    Fetecheddata(correctURL)
  }, [searchTerm])


  if(loading){
    return(
      <div>
      <h3>Loading...</h3>
      </div>
    )
  }


  if(isError && isError.status){
    return(
      <div>
        <h3 style={{color:'red'}}>{isError && isError.status}</h3>
      </div>
    )
  }


  return (
    <div>
      <form>
        <input type="text" id="search" name='search'
          placeholder='Enter something new...'
          value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
      <hr />
      <ul className='cocktail-data'>
        {
          data.map((eachitem) => {
            const { idDrink, strDrink, strDrinkThumb } = eachitem;
            return (
              <li key={idDrink}>
                <div>
                  <div>
                    <img src={strDrinkThumb} alt="strDrinkThumb" />
                  </div>
                  <div className='text'>
                    <h3>{strDrink}</h3>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ExampleuseEffect3





// import React, { useState, useEffect } from 'react';

// const ExampleuseEffect3 = () => {
//   const [message, setMessage] = useState('Hi there, how are you?');

//   useEffect(() => {
//     console.log('trigger use effect hook');

//     setTimeout(() => {
//       setMessage("I'm fine, thanks for asking.");
//     }, 1000)
//   })

//   return <h1>{message}</h1>
// };

// export default ExampleuseEffect3;
