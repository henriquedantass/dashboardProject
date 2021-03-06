import { useQuery } from "react-query";
import { api } from "../api";


interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

interface GetUsersResponse {
  totalCount: number;
  users: User[];
}

export async function getUsers(page:number): Promise<GetUsersResponse> {
    
  const { data , headers} = await api.get('users' ,  {
    params : {
      page,
    }
  })

  const totalCount = headers['x-total-count']


  const users = data.users.map( user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-br' , {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  })
  return { users , totalCount}
}


export function useUsers(page:number){
   return useQuery(['users' , page] , () => getUsers(page), {
    staleTime: 1000 * 5 , // 5 seconds
  })
}