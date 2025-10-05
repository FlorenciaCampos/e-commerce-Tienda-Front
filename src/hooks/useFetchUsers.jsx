import { useState } from "react";

function useFetchUsers() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const initialUrl = "http://localhost:8080/api/user/getUsers";

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(initialUrl);
      if (response.ok) {
        const users = await response.json();
        return users;
      } else {
        setError(response.statusText);
        throw new Error(`Error en la respuesta de la API: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { fetchUsers, error, loading };
}

export default useFetchUsers;
