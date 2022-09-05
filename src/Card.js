import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green ma2 tc pa3 dib br3 grow bw2 shadow-5">
      <div>
        <img src={`https://robohash.org/${id}?100*100`} alt="Robot" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
