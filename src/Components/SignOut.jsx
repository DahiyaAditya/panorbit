import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const SignOut = (props) => {
  let rand =   Math.floor(Math.random()*10 +1);
  let rand2 =  Math.floor(Math.random()*10 +1);


  useEffect(() => {
    try {
      const getData = async () => {
        const Data = await fetch("https://panorbit.in/api/users.json");
        const jsonData = await Data.json();
        const profile = jsonData.users.find((obj) => {
          return obj.id === Number(props.sendID);
        });
         if(rand === profile.id){
          rand =   Math.floor(Math.random()*10 +1);
         }
         if(rand2 === profile.id  || rand === rand2){
          rand2 =   Math.floor(Math.random()*10 +1);
         }
        const profile1 = jsonData.users.find((obj) => {
            return obj.id === rand;
          });
        const profile2 = jsonData.users.find((obj) => {
            return obj.id === rand2;
          });
        setData(profile);
        setProfile1(profile1);
        setProfile2(profile2);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [props.sendID]);

  const [data, setData] = useState([]);
  const [profile1, setProfile1] = useState([]);
  const [profile2, setProfile2] = useState([]);
  return (
    <>
      <div className="main-singout">
        <div className="details-signout">
          <img src={data.profilepicture} alt="example" />
          <p>{data.name}</p>
          <p>Username : {data.username}</p>
        </div>
        <hr />
        <div className="details-signout">
        <Link to={`/profile/${profile1.id}`} style={{ textDecoration: "none"}} >
          <img src={profile1.profilepicture} alt="example" />
          <p>{profile1.name}</p>
        </Link>
        </div>
        <hr />
        <div className="details-signout">
        <Link to={`/profile/${profile2.id}`} style={{ textDecoration: "none"}} >
          <img src={profile2.profilepicture} alt="example" />
          <p>{profile2.name}</p>
        </Link>
        </div>
        <Link to={`/`}><button>Signout</button></Link>  
      </div>
    </>
  );
};

export default SignOut;
