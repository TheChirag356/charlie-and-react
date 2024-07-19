import './App.css'
import {Profile, Login} from './components'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>Charlie aur React</h1>
        <Login />
        <Profile />
        </UserContextProvider>
    </>
  )
}

export default App
