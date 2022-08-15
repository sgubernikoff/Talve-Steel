import React from "react";

function TeamMemberCard({ teamMember }) {
  console.log(teamMember.image);
  return (
    <div className="team-member-card">
      <h1 className="cardtitle">{teamMember.name}</h1>
      <img alt={teamMember.name} src={teamMember.image} />
      <div className="top_about_info">
        {" "}
        <p className="experience">
          <strong>{teamMember.jobTitle}</strong>
        </p>
        {/* <p className="experience">
        <strong>Years of Experience </strong>
        {teamMember.experience} years
      </p> */}
        <p className="info-card-text">{teamMember.email}</p>
        <p className="info-card-text">{teamMember.phone}</p>
      </div>
      <br></br>
      {/* <br></br> */}
      <div className="info-card-text-blurb">
        <p className="info-card-text">{teamMember.blurb}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
