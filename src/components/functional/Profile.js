import React from 'react'

const Profile = ({username}) => {
  const [profileData, setProfileData] = useState({});

  return (
    <div>{username}</div>
  )
}

export default Profile