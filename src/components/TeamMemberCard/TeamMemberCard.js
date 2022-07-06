import React from "react";
import "./TeamMemberCard.css";

function TeamMemberCard({ mainColor, worker }) {
   return (
      <div className="card">
         <span
            className="upper-container"
            style={{ backgroundColor: mainColor }}
         >
            {worker.image.includes("https://") ? (
               <img src={worker.image} alt={`${worker.name} profile picture`} />
            ) : (
               <img src="../../images/defaultAvatarImage.png"></img>
            )}
         </span>
         <span className="bottom-container">
            <h3>{worker.name}</h3>
            <p>{worker.job}</p>
         </span>
      </div>
   );
}

export default TeamMemberCard;
