import React from 'react';
import useGithubStats from 'react-github-user-stats';
import GitHubCalendar from 'react-github-calendar';

const ProfileDetails = () => {
  const gituser = "FearDread";
  const { error, loading, userData } = useGithubStats(gituser);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>User not found</div>;
  }

  console.log('github data = ', userData);
  return (
    <>
    <div>
      <h2>{userData.name}</h2>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      {/* Add more stats as needed */}
    </div>
    <GitHubCalendar username={gituser} />;
    </>
  );
};

export default ProfileDetails;