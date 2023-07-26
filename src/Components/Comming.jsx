import React from "react";

const Comming = (props) => {
  return (
    <>
      <div className="comming-main">
        <div className="comming-header">
          <h3>{props.section}</h3>
          <div className="all-accounts">
            <div className="details">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRLkM8WY4lEvPXLNl4PVsacTkOPM8sJwV9w&usqp=CAU"
                alt="example"
              />
              <p>Aditya singh</p>
            </div>
          </div>
        </div>
        <hr />
         <h1>comming soon</h1>
      </div>
    </>
  );
};

export default Comming;
