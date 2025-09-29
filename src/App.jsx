

import { useState } from 'react'
import './App.css'
import useFetchUsers from './hooks/useFetchUsers'

function App() {
  const [users, setUsers] = useState([])
  const { fetchUsers, error, done } = useFetchUsers()
  const usersFetched = fetchUsers()
  
  setUsers(usersFetched,error,done)
  
  console.log(users)

  return (
    <>
   
    
    </>
  )
}

export default App
