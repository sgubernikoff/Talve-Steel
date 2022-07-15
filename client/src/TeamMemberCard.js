import React from "react";

function TeamMemberCard({ teamMember }) {
  console.log(teamMember.image);
  return (
    <div className="team-member-card">
      <h1 className="cardtitle">{teamMember.name}</h1>
      <img alt={teamMember.name} src={teamMember.image} />
      <p className="experience">
        <strong>Job Title: </strong>
        {teamMember.jobTitle}
      </p>
      {/* <p className="experience">
        <strong>Years of Experience </strong>
        {teamMember.experience} years
      </p> */}

      <p className="info-card-text">{teamMember.email}</p>
      <p className="info-card-text">{teamMember.phone}</p>
    </div>
  );
}

export default TeamMemberCard;
