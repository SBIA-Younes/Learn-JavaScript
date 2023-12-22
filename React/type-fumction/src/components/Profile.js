import React from 'react'

function Profile({profile, count}) {

  console.log('je suis dans le Profile');
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <h2>User ID: {count}</h2>
        </li>
        <li className="list-group-item">
          <strong>Nom:</strong> {profile.name}
        </li>
        <li className="list-group-item">
          <strong>Pseudo:</strong> {profile.username}
        </li>
        <li className="list-group-item">
          <strong>Email:</strong> {profile.email}
        </li>
      </ul>
    </div>
  )
}

export default React.memo(Profile)