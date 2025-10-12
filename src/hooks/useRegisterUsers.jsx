import { useState } from "react";

function useRegisterUsers () { //registar usuario..crear
    
    const [error, setError]= useState()
    const [done, setDone]= useState()
    const initialUrl = "http://localhost:8080/api/user/create";
    const registerUser = async(formData) =>{
        try {
          const response =   await fetch(initialUrl,{
                method: "POST",
                headers:{ "content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            if(response.ok){
              const response =  await response.json()
              console.log(response)
              setDone(true)
            }else{
                setError(response.statusText);
                setDone(false)
            }
        } catch (error) {
            console.error(error)
            setError(error)
            setDone(false)
           
            
        }

    }
    return { registerUser,done,error }
}
export default useRegisterUsers