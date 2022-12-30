import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUser, getOneUser } from '../users';

export const User = () => {
  
  const params = useParams();
  const navigate = useNavigate();
  
  const user = getOneUser(parseInt(params.userId));

  const handleDelete = () => {
    deleteUser(user.id);
    navigate("/users")
  }

  if (!user){ 
    return <div>User does not exist</div>
  }
  
  return (
    
    <div>
      <h2>{`${user.first_name} ${user.last_name} / ID: ${user.id}`}</h2>
      <div>EMail: {user.email}</div>
      <div>Gender: {user.gender}</div>
      <div>Phone: {user.phone}</div>
      <div>Website: {user.website}</div>
      <br/>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
