import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import '../styles/ShareButton.css';

const ShareButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="header-button">
      <Link to={isLoggedIn ? "/car-listing" : "/Login"} className="share-car-button-header">
        Share Your Car
      </Link>
    </div>
  );
}

export default ShareButton;
