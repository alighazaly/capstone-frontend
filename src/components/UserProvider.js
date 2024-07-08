import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Load user data from local storage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      
    }
  }, []);

  // Function to update userData and store in local storage
  const updateUserData = (newUserData) => {
    setUserData(newUserData);
    // Store updated user data in local storage
    localStorage.setItem('userData', JSON.stringify(newUserData));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
