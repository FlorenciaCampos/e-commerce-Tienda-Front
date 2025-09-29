

import { useEffect, useState } from 'react'
import './App.css'
import useFetchUsers from './hooks/useFetchUsers'

function App() {
  const [users, setUsers] = useState([])
  const { fetchUsers, error, loading } = useFetchUsers()
  
  useEffect(() =>{
    const usersFetched = fetchUsers()
    setUsers(usersFetched,error,loading)
   ,[]}
)
  

  
  console.log(users)

  return (
    <>
   
    
    </>
  )
}

export default App
