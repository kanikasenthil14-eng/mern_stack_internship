/*import React from 'react'

const App = () => {
  let text="Kanika"
  function greetings(){
    return "Thankyou for learning"
  }
  return (

    <>
      <h1>hello csbs</h1>
      <p>learning mern</p>
      <h3>welcome {text}</h3>
      <h3>addition {10+20}</h3>
      <h1>{greetings()}</h1>

    </>
  )
}

export default App
*/


//conditional rendering
/*
import React from 'react'

const App = () => {
  let text="Kanika"
  function greetings(){
    return "Thankyou for learning"
  }
  let age=15
  const userInput='<img src=x onerror=alert("hacked")>'//considered as text
  return (

    <>
      <h1 className="dfghjk">hello csbs</h1>
      <p>learning mern</p>
      <h3>welcome {text}</h3>
      <h3 style={{color:"red"}}>addition {10+20}</h3>
      <h1>{greetings()}</h1>
      <h1>{(age>18)?("elegible to vote"):("not")}</h1>
      <h2>{userInput}</h2>
      <div className="text-red-500 flex flex-cols gap-1">
        <h1>1234</h1>
        <h1>5678</h1>
        <h1>90</h1>
      </div>

    </>
  )
}

export default App
*/

//day 2
/*
import React from 'react'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Navbar/>
      
    </>
  )
}

export default App
*/

/*
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import Counter from './components/Counter'
import UserInput from './components/UserInput'
const App = () => {
  return (
    <>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <DashBoard/>
        <Counter/>
      </div>
      <Footer/>
      <Login/>
      <UserInput/>
    </>
  )
}

export default App
*/

//routing
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import Counter from './components/Counter'
import UserInput from './components/UserInput'
import { Route, Routes } from 'react-router-dom'
import About from './components/about'
import Students from './components/Students'
import Settings from './components/Settings'
const App = () => {
  return (
    <>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <Routes>
          <Route path="/"element={<DashBoard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
        {/* <Counter/> */}
      </div>
      <Footer/>
      {/* <Login/>
      <UserInput/> */}
    </>
  )
}

export default App