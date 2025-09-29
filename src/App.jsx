

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
     <h1>Usuarios</h1>
    {loading ?(
     
      <p>Cargando usuarios</p>
    ):(
      users.map((user) =>{
        
        <div id={user._id}> {/* el id se coloca en cada elemento que se va a repetir por cada registro */}
          <h2>{user.name}</h2>
          <h2>{user.lastName}</h2>
          <h3>{user.email}</h3>
         <h4> {user.age}</h4>

        </div>

      })
    )}
    
    </>
  )
}

export default App
