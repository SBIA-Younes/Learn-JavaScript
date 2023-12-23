import React from 'react'

function TableUsers({dataArray}) {
  return (
    <table id='table'>
      <thead>
        <tr>
          <th>Nom</th> 
          <th>Nom Utilisateur</th> 
          <th>Email</th>
          <th>Address</th>

        </tr>
      </thead>
      <tbody>
        {
          dataArray.map(({id, name, username, email, address})=>{
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address.street} {address.suite} {address.city}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default TableUsers