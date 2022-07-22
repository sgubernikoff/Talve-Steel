import React from "react";

function TeamMemberCard({ products }) {
  console.log(products.image);
  return (
    <div className="product_card">
      <img className="prod_image" src={products.image}></img>
      <h3 className="prod_name">{products.name}</h3>
      <p className="prod_text">{products.price}</p>
    </div>
  );
}

export default TeamMemberCard;
