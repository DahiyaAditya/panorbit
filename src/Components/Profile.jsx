import React from 'react'
import Comming from './Comming'
import ProfilePage from './ProfilePage'
import { useState } from 'react'
const Profile = () => {
  const [active, setActive] = useState("Profile");
  const setPage = (section)=>{
    setActive(section);
  }
  return (
    <>
    <div className='main-pages'>
      <div className='main-header'>
        <div className='header'>
          <h3  onClick={()=>setPage("Profile")}>Profile</h3>
          <h3  onClick={()=>setPage("Post")}>Post</h3>
          <h3  onClick={()=>setPage("Gallery")}>Gallery</h3>
          <h3  onClick={()=>setPage("ToDo")}>ToDo</h3>
        </div>
      </div>
      {active === "Profile" ? <ProfilePage></ProfilePage> : <Comming section = {active}></Comming>}
      </div>
    </>
    
  )
}

export default Profile