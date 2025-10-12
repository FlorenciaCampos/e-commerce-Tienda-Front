import { useState } from "react";
import useRegisterUsers from "../../hooks/useRegisterUsers";

export function Register() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    password: ""
  });

  const { done, error, registerUser } = useRegisterUsers();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await registerUser(form);
    console.log({ response });
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">Nombre</label>
        <input
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          value={form.name}
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="lastName">Apellido</label>
        <input
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          value={form.lastName}
          type="text"
          id="lastName"
          name="lastName"
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          value={form.email}
          type="email"
          id="email"
          name="email"
        />

        <label htmlFor="age">Edad</label>
        <input
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          value={form.age}
          type="number"
          id="age"
          name="age"
        />

        <label htmlFor="password">Contraseña</label>
        <input
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          value={form.password}
          type="password"
          id="password"
          name="password"
        />

        <button type="submit">Crear Usuario</button> <br />
        <button type="reset">Borrar todo</button>
      </form>

      {done ? <p>Usuario creado</p> : <></>}
      {error ? <p>{`Error : ${error}`}</p> : <></>}
    </>
  );
}
