// import React from 'react'
// import Calculator from './Components/Calculator'

// export default function App() {
//   return (
//   <>
// <Calculator />
//   </>

      
    
//   )
// }
import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export default function Calculator() {
    const [n1,setn1]=useState(0)
    const [n2,setn2]=useState(0)
    const [operator,setoperator]=useState('+')
    const [result,setResult]=useState(0)



    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('/calculate', { n1:n1, n2:n2, operator:operator });
        setResult(res.data.result);
      };  


  return (
    <>
      <div className='h-55 m-2 p-2 fs-5'>
    Calculator
  </div>
  <form onSubmit={handleSubmit}>

    <label>Enter your Numbers</label>
    <input className='m-2 p-1 rounded mt-3' type='number'value={n1} placeholder='Number' onChange={(event)=>setn1(+event.target.value)}  />
    <input className='m-2 p-1 rounded mt-3' type='number' value={n2} placeholder= 'Number' onChange={(event)=>setn2(+event.target.value)}  />
    <select value={operator} className='p-1 m-2' onChange={(event)=>setoperator(event.target.value)}>
    <option value="+">Add</option>
    <option value="-">Sub</option>
    <option value="*">Mul</option>
    <option value="/">Div</option>
</select>
    <button type="button" className="btn btn-primary p-2 m-2">Calculate</button>
   
  </form>
  <div>
    Result={result}
  </div>
    </>
  )
}
