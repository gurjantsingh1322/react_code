import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from "react./jsx-runtime.js"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
  <div>
    <App />
    <h1>This is a coding of console.log('?')</h1>
  </div>
  )

}

// const ReactEliment = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotheruser = 'code with Gurjant'

const gstEliment = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank' },
  'clicked from my btn --',
  // anotheruser
)

// const newEliment = (

//   <a href='https://google.com' target='_blank'>This is a google.com</a>
// )


ReactDOM.createRoot(document.getElementById('root')).
// render(
//   <StrictMode>
//     <App />

    
//   </StrictMode>,
// );

render(
  // <MyApp />

  // MyApp()

    // <ReactEliment />
    // <newEliment />
    // newEliment
    gstEliment
// ReactEliment()

)


// function App(){
//   return (
//     <Chai/>
//   )
// }

// export default App;