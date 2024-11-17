import React from 'react';
import useGithubStats from 'react-github-user-stats';
import GitHubCalendar from 'react-github-calendar';
import Reveal from '@/components/Reveal';

const ProfileDetails = (data) => {
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
        <div className="my-auto p-3 md:p-6 lg:p-12">
      <Reveal
          animation="fade-in zoom-in"
          className="sm:with-back-plate max-w-3xl border border-omega-700 md:before:bg-omega-700"
        >
          <div>
          <h2>{userData.name}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
            <img src={userData.avatar_url} className="project-profile-picture" alt="profile-pic"></img>

          </div>
        </Reveal>
    <GitHubCalendar username={gituser} />;
    <div className="mt-4 grid grid-cols-fluid gap-4 [--tw-fluid-col-min:15rem] md:mt-12 md:gap-6">
          {data?.collection?.records?.map((item, i) => (
            <Reveal animation="fade-in slide-in-top" delay={i * 100} key={item.name}>
              <RepositoryCard {...item} />
            </Reveal>
          ))}
        </div>
    </div>
    </>
  );
};

export default ProfileDetails;