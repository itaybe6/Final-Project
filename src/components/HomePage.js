import React from 'react';
import { useUser } from './UserContext';

function HomePage() {
  const { user } = useUser();
  return (
    <div>
      
      
      {user ? `Hello, ${user.name}` : 'Not logged in'}

    </div>
  );
}

export default HomePage;
