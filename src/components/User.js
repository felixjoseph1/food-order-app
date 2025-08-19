import React, { useState } from 'react'

const User = (props) => {
    const {name,email} = props;
  return (
    <div className="flex flex-col items-left justify-left p-4 border-spacing-6" >
          <h1>User Component</h1>
            <div>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          
    </div>
  )
}

export default User
