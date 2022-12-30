import React from 'react';
import { NavLink, useSearchParams, Outlet } from 'react-router-dom';
import { getAllUsers } from '../users';

export const Users = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const users = getAllUsers();
  const filter = searchParams.get("filter") ?? "";
  
  const handleFilter = (e) => {
    setSearchParams({ filter: e.target.value });
  }

  return (
    <div>
      <h1>Users</h1>
      <input 
        value={filter} 
        onChange={handleFilter} 
        type="text" 
        placeholder="filter" 
      />
      
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <ul>
        {users.filter(user => {
            if (!filter) return true;

            const name = user.first_name.toLowerCase();
            return name.includes(filter.toLocaleLowerCase())
          }).map((user) => 
          <li 
            key={user.id}>
            <NavLink style={({isActive}) => isActive ? {color: "red"} : {}} to={"/users/" + user.id.toString()}>
              {`${user.first_name} ${user.last_name}`}
            </NavLink>
          </li>
        )}
      </ul>
          <article>
            <Outlet />
          </article>
      </div>
      
    </div>
  )
}
