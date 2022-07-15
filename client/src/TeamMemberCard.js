import React from "react";

function TeamMemberCard({ teamMember }) {
  console.log(teamMember.image);
  return (
    <div className="team-member-card">
      <h1>{teamMember.name}</h1>
      <img alt={teamMember.name} src={teamMember.image} />
      <p>
        <strong>Job Title: </strong>
        {teamMember.jobTitle}
      </p>
      <p>
        <strong>Years of Experience: </strong>
        {teamMember.experience} years
      </p>
      <br />
      <p>{teamMember.blurb}</p>
    </div>
  );
}

export default TeamMemberCard;
