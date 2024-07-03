import React from 'react';
import { useUser } from './UserContext';

function HomePage() {
  const { user } = useUser();
  console.log(user)
  return (
    <div>
      
      
      {user ? `Hello, ${user.id}` : 'Not logged in'}

    </div>
  );
}

export default HomePage;
