'use client';
import React, { useEffect } from 'react';

interface Params {
  userId: string;
}

function Profile({ params }: { params: Promise<Params> }) {
  const { userId } = React.use(params); // Unwrap the promise

  useEffect(() => {
    console.log(userId); // Log the userId
  }, [userId]);

  return <div>Profile for User ID: {userId.replace('%40','@')}</div>;
}

export default Profile;
