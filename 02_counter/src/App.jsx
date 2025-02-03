import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, gurjant] = useState(5)
  // let counter = 10;

  const addvalue = () =>{
    // console.log("button clicked", Math.random())
    // console.log("button clicked", counter)
    gurjant(counter + 1)
    if(counter >= 25){
      // console.log("valu is 9")
      alert('this last value is 25')
      if (counter === 25) {
        alert('this value is nagtive')
        gurjant(counter === 0)
      }
    }
  }
  const removevalue = () =>{
    // console.log("button clicked", Math.random())
    gurjant(counter - 1 )
    if(counter <= 0){
      // console.log("valu is 9")
      // alert('this value is nagtive')
      if (counter >= 0) {
        alert('this value is nagtive')
        gurjant(counter === 1)
        removevalue.button.innerHTML = 'ng Value'
      }
      // gurjant(stop)
      // gurjant(stop(counter))
      // counter +1

    }
  }

  return (
    <>
     <h1>Code With Gurjant</h1>
     <h2>Counter value: {counter}</h2>
    <br />
     <button
     onClick={addvalue}
     >Add value {counter}</button>
     <button
     onClick={removevalue}
     >remove value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )

}
export default App
