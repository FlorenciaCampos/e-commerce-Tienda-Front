import {useState} from "react";

function useFetchUsers() { //fetch es traer
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const initialUrl = "http://localhost:8080/api/user/getUsers"

    const fetchUsers = async() =>{
        try {
          const response =  await fetch(initialUrl)
          if(response.ok){
            const users = await response.json()
            console.log(users)
            setLoading(false)//confirma la finalizacion de la operacion
            return users
          }else{
            //este manejo de error es respecto a la Api
            setError(response.statusText)
            throw new Error(`Error en la respuesta de la Api: ${response.statusText}`)
          }
            
        } catch (error) {// este manejo de error es respecto al front
            console.error(error)
            setError(error)
            
        } finally{
          setLoading(false)
        }
    }
 return {fetchUsers,error,loading}
}
export default useFetchUsers;