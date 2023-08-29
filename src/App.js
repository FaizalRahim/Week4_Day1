import React, { useState } from 'react';
import ButtonAppBar from './ButtonAppBar';
import UserForm from './UserForm';
import Card from './Card';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <ButtonAppBar />
      <UserForm onFormSubmit={handleFormSubmit} />
      {userData && <Card userData={userData} />}
    </div>
  );
}

export default App;

