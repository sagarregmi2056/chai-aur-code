
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
    // import provider here to extract data
    <UserContextProvider>
      <h1>react with context api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  
  
  )
}

export default App

// now create flows goes to component

