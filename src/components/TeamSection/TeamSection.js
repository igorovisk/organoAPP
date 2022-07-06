import React, { useState, useEffect } from "react";
import "./TeamSection.css";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";

function TeamSection({ team, workers }) {
   const styles = {
      backgroundColor: team.secondaryColor,
   };

   return (
      workers.length > 0 && (
         <section className="team-section" style={styles}>
            <h2 style={{ borderColor: team.mainColor }}>{team.name}</h2>
            <div className="card-container">
               {workers.map((worker) => {
                  return (
                     <TeamMemberCard
                        mainColor={team.mainColor}
                        worker={worker}
                     />
                  );
               })}
            </div>
         </section>
      )
   );
}

export default TeamSection;
