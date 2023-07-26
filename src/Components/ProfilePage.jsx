import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SignOut from "./SignOut";
const Comming = () => {
    const {id} = useParams();
   
    useEffect(() => {
        try {
            const getData = async () => {
            const Data = await fetch("https://panorbit.in/api/users.json");
            const jsonData = await Data.json();
            const singleData = jsonData.users.find((obj)=>{
                    return obj.id === Number(id);
            })
            setData(singleData);
            setCompanyData(singleData.company);
            setaddressData(singleData.address)
          };
          getData();
        } catch (error) {
          console.log(error);
        }
       
      },[id]);

    const [data, setData] = useState([]);
    const [companydata, setCompanyData] = useState([]);
    const [addressdata, setaddressData] = useState([]);
    const [display, setDisplay] = useState("false")
    const displaySignout = ()=>{
        setDisplay("true");
    }

    const handleClickOutside = (event)=>{
      const headerDiv = document.querySelector(".comming-header");
      
      if (headerDiv.contains(event.target) === false) {
        setDisplay(false);
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);
    
  return (
    <>
      <div className="comming-main">
        <div className="comming-header" onClick={displaySignout}>
        {display === "true" ? <SignOut sendID= {id}></SignOut> : ""}
          <h3>Profile</h3>
          <div className="all-accounts">
            <div className="details">
              <img
                src={data.profilepicture}
                alt="example"
              />
              <p>{data.name}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="main-data">
            <div className="profile-data">
                 <img src={data.profilepicture} alt="example" />
                 <p>{data.name}</p>
                 <div className="more-data">
                    <h4><span>Username : </span>{data.username}</h4>
                    <h4><span>E-mail : </span>{data.email}</h4>
                    <h4><span>Phone : </span>{data.phone}</h4>
                    <h4><span>Website : </span>{data.website}</h4>   
                 </div>
                 <hr />
                 <h2>Company</h2>
                 <div className="more-data">
                    <h4><span>Name : </span>{companydata.name}</h4>
                    <h4><span>catchPhrase : </span>{companydata.catchPhrase}</h4>
                    <h4><span>bs : </span>{companydata.bs}</h4>  
                 </div>
            </div>
            <hr />
            <div className="location-data">
            <h2>Address</h2>
                 <div className="more-data">
                    <h4><span>Street : </span>{addressdata.street}</h4>
                    <h4><span>Suite : </span>{addressdata.suite}</h4>
                    <h4><span>City : </span>{addressdata.city}</h4>  
                    <h4><span>ZipCode : </span>{addressdata.zipcode}</h4>
                 </div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7826950050876!2d77.37630467524454!3d28.51618498935505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9428d6a606b%3A0x473b9273fc10dd4b!2sACE%20Capitol!5e0!3m2!1sen!2sin!4v1690136510417!5m2!1sen!2sin" ></iframe>
            </div>
        </div>
      </div>
    </>
  );
};

export default Comming;
