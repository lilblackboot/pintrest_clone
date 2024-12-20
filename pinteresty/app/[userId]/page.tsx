'use client';

import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import app from './../Shared/firebaseConfig';
import UserInfo from './../components/UserInfo';

interface Params {
  userId: string;
}

interface UserInfoData {
  name: string;
  email: string;
  // Add other fields based on your Firestore data structure
}

function Profile({ params }: { params: Promise<Params> }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfoData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const db = getFirestore(app);

  // Unwrap the params promise and set the userId
  useEffect(() => {
    (async () => {
      try {
        const resolvedParams = await params;
        setUserId(decodeURIComponent(resolvedParams.userId)); // Decode special characters
      } catch (err) {
        console.error('Error resolving params:', err);
        setError('Failed to resolve user parameters.');
        setIsLoading(false);
      }
    })();
  }, [params]);

  // Fetch user info from Firestore
  useEffect(() => {
    if (userId) {
      const fetchUserInfo = async () => {
        try {
          const docRef = doc(db, 'user', userId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserInfo(docSnap.data() as UserInfoData);
          } else {
            console.log('No such document!');
            setError('No user found with the given ID.');
          }
        } catch (err) {
          console.error('Error fetching user info:', err);
          setError('Failed to fetch user information.');
        } finally {
          setIsLoading(false);
        }
      };

      fetchUserInfo();
    }
  }, [userId, db]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {userInfo ? 
        <UserInfo userInfo={userInfo} />
       : null}
    </div>
  );
}

export default Profile;
