import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from '../supabase/supabaseClient'


interface User {
  id: number;
  name: string;
  email: string;
}

function App() {

  const [user,setUser] = useState<User | null>(null)
  const [users,setUsers] = useState<User[]>([])
  console.log(users)

  //Ainda tô deixei as rls desativadas, mas preciso aprender a trabalhar com elas ligadas
  async function fetchUsers(){
    const {data,error} = await supabase
    .from('users')
    .select('*')
  
    if(error){
      console.error('Erro ao buscar usuários:', error)
    }
    if(data){
      setUsers(data)
    }
  }
  async function createUser(name: string, email: string){
    await supabase
    .from('users')
    .insert({name:user?.name,email:user?.email})
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  console.log(users)

  return (
    <>
      <section id="center">
        <h1>Lista de Usuários</h1>
        <ul>
          {users.map((user: User) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
