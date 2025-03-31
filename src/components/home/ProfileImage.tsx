import React from 'react';

const ProfileImage: React.FC = () => {
  return (
    <picture>
      <source 
        srcSet="././images/home/profile.jpeg"
        type="image/jpeg"
      />
      <img
        src="/images/profile.jpg"
        alt="Profile"
        width="400"
        height="400"
        loading="eager"
        decoding="async"
        className="profile-image rounded-full border-4 border-accent-light dark:border-accent-dark object-cover shadow-lg"
        fetchPriority="high"
      />
    </picture>
  );
};

export default ProfileImage;
