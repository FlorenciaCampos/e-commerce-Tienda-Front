import { useEffect, useState } from 'react'
import './App.css'
import useFetchUsers from './hooks/useFetchUsers'
import { Register } from './components/user/Register'

function App() {
  const [users, setUsers] = useState([])
  const { fetchUsers, loading } = useFetchUsers()
  
   

  useEffect(() => {
    const loadUser = async () => {
      const usersFetched = await fetchUsers()
      if (usersFetched) {
        setUsers(usersFetched)
      }
    }
    loadUser()
  }, []) // 👈 array vacío y estable
  
  

  return (
    <>
      <h1>Usuarios</h1>
      {loading ? (
        <p>Cargando usuarios</p>
      ) : (
        <div className="user-card-wrapper">
          {users.map((user) => (
            <div className='user-card' key={user._id}>
              <div className="user-info">
                <h2>{user.name} {user.lastName}</h2>
                <h3>{user.email}</h3>
                <h4>{user.age}</h4>
              </div>
            </div>
          ))}
          <Register/>
        </div>

      )}
    </>
  )
}

export default App
