import { useState } from "react";

function useRegisterUsers () { //registrar usuario..crear usuario
    
    const [error, setError]= useState()
    const [done, setDone]= useState()
    const initialUrl = "http://localhost:8080/api/user/create";

    const registerUser = async(formData) =>{
        try {
            const res = await fetch(initialUrl, {
                method: "POST",
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            if(res.ok){
                const data = await res.json()   // ← cambio: no se redefine "response"
                console.log(data)
                setDone(true)
                return data                     // ← cambio: devolver la respuesta
            } else {
                setError(res.statusText);
                setDone(false)
            }
        } catch (error) {
            console.error(error)
            setError(error)
            setDone(false)
        }
    }

    return { registerUser, done, error }
}

export default useRegisterUsers
