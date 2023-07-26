import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Accounts = () => {
  useEffect(() => {
    try {
      const getData = async () => {
        const Data = await fetch("https://panorbit.in/api/users.json");
        const jsonData = await Data.json();
        setData(jsonData.users);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [data, setData] = useState([]);

  return (
    <>
      <div className="main-body">
        <div className="main">
          <div className="heading">
            <h2>Select an account</h2>
          </div>
          <div className="accounts">
            {data.map((obj, i) => {
              return (
                <Link to={`/profile/${obj.id}`} key={i} style={{ textDecoration: "none" }}>
                <div className="all-accounts">
                  <div className="details">
                    <img src={obj.profilepicture} alt="example" />
                    <p>{obj.name}</p>
                  </div>
                  <hr />
                </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
