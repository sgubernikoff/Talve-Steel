import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import profile from "./profile.jpeg";
import place from "./placehold.png";
import about from "./about.png";

function About() {
  const boss = {
    isBoss: true,
    name: "Larry Talve",
    jobTitle: "President",
    experience: 25,
    image: profile,
    email: "email@email.com",
    phone: "+1-(516)-721-4603",
    blurb: "Larry blurb",
  };
  const teamMember = {
    isBoss: false,
    name: "Zachary Talve",
    jobTitle: "Vice President",
    experience: 5,
    image: profile,
    email: "email@email.com",
    phone: "‭+1-(516)-974-5707‬",
    blurb: "Zack blurb",
  };
  return (
    <div>
      <div className="new_banner">
        <div className="banner_text">
          <h4 className="subhead">ABOUT US</h4>
          <h2 className="mainhead">MEET THE TEAM</h2>
        </div>
      </div>
      {/* <img className="contact_banner" src={about} alt="contact-banner" /> */}
      <h1 className="slogan">Anchor Stainless - A New Generation</h1>
      <div className="about">
        <div className="leftside">
          <div className="about-image-container">
            <img src={place} alt="company" />
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
              feugiat pretium nibh ipsum consequat nisl vel. Non quam lacus
              suspendisse faucibus interdum posuere lorem ipsum. Purus viverra
              accumsan in nisl nisi scelerisque eu. Volutpat consequat mauris
              nunc congue nisi vitae. Tempus egestas sed sed risus pretium quam
              vulputate dignissim suspendisse. Leo integer malesuada nunc vel
              risus commodo viverra maecenas accumsan. Adipiscing vitae proin
              sagittis nisl rhoncus mattis rhoncus. Varius vel pharetra vel
              turpis nunc. Ultricies mi quis hendrerit dolor magna eget est
              lorem. Ornare arcu dui vivamus arcu felis. Sit amet luctus
              venenatis lectus magna fringilla urna porttitor rhoncus. Erat nam
              at lectus urna duis convallis convallis. Adipiscing tristique
              risus nec feugiat in. Feugiat in ante metus dictum at. Suspendisse
              interdum consectetur libero id faucibus nisl tincidunt. Rhoncus
              dolor purus non enim praesent elementum.
              <br />
              <br />
              Viverra maecenas accumsan lacus vel facilisis volutpat est velit
              egestas. Morbi tempus iaculis urna id volutpat lacus laoreet.
              Porttitor leo a diam sollicitudin. Sed velit dignissim sodales ut
              eu sem integer vitae. Est velit egestas dui id ornare. Rhoncus
              mattis rhoncus urna neque viverra justo. Porttitor massa id neque
              aliquam vestibulum morbi. Et ultrices neque ornare aenean euismod
              elementum nisi. Urna nec tincidunt praesent semper feugiat nibh
              sed pulvinar proin. Enim nec dui nunc mattis enim ut tellus.
              Bibendum enim facilisis gravida neque convallis. Sed enim ut sem
              viverra aliquet eget sit amet tellus. Eros donec ac odio tempor
              orci dapibus. Ullamcorper eget nulla facilisi etiam. Quam viverra
              orci sagittis eu volutpat odio. Malesuada fames ac turpis egestas
              integer eget aliquet. In nibh mauris cursus mattis molestie a.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="container-team">
            <br></br>
            <div className="about-boss-container">
              <TeamMemberCard teamMember={boss} />
            </div>
            <div className="about-team-members-container">
              <TeamMemberCard teamMember={teamMember} />
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
