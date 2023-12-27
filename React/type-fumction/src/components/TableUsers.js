import {useDeferredValue} from 'react'

function TableUsers({dataArray, notification}) {
  
  const deferredValue = useDeferredValue(dataArray);

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
        {/* {notification && <tr><td colSpan="4" style={{color:'red'}}>{notification}</td></tr>} */}

        { 
          deferredValue.map(({id, name, username, email, address})=>{
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