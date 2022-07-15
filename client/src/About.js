import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import profile from "./profile.jpeg";

function About() {
  const boss = {
    isBoss: true,
    name: "The Boss",
    jobTitle: "Owner/CEO",
    experience: 25,
    image: profile,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
  const teamMember = {
    isBoss: false,
    name: "Buddy",
    jobTitle: "Employee",
    experience: 5,
    image: profile,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
  return (
    <div className="about">
      <h1>**INSERT SLOGAN HERE**</h1>
      <div className="about-image-container">
        <img
          src="https://nerdreactor.com/wp-content/uploads/2015/03/Stock-Photos-Unfinished-Business-6.jpg"
          alt="company"
        />
      </div>
      <h1>Meet the team!</h1>
      <div className="about-boss-container">
        <TeamMemberCard teamMember={boss} />
      </div>
      <div className="about-team-members-container">
        <TeamMemberCard teamMember={teamMember} />
        <TeamMemberCard teamMember={teamMember} />
        <TeamMemberCard teamMember={teamMember} />
        <TeamMemberCard teamMember={teamMember} />
        <TeamMemberCard teamMember={teamMember} />
        <TeamMemberCard teamMember={teamMember} />
      </div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium
        nibh ipsum consequat nisl vel. Non quam lacus suspendisse faucibus
        interdum posuere lorem ipsum. Purus viverra accumsan in nisl nisi
        scelerisque eu. Volutpat consequat mauris nunc congue nisi vitae. Tempus
        egestas sed sed risus pretium quam vulputate dignissim suspendisse. Leo
        integer malesuada nunc vel risus commodo viverra maecenas accumsan.
        Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Varius vel
        pharetra vel turpis nunc. Ultricies mi quis hendrerit dolor magna eget
        est lorem. Ornare arcu dui vivamus arcu felis. Sit amet luctus venenatis
        lectus magna fringilla urna porttitor rhoncus. Erat nam at lectus urna
        duis convallis convallis. Adipiscing tristique risus nec feugiat in.
        Feugiat in ante metus dictum at. Suspendisse interdum consectetur libero
        id faucibus nisl tincidunt. Rhoncus dolor purus non enim praesent
        elementum.
        <br />
        <br />
        Viverra maecenas accumsan lacus vel facilisis volutpat est velit
        egestas. Morbi tempus iaculis urna id volutpat lacus laoreet. Porttitor
        leo a diam sollicitudin. Sed velit dignissim sodales ut eu sem integer
        vitae. Est velit egestas dui id ornare. Rhoncus mattis rhoncus urna
        neque viverra justo. Porttitor massa id neque aliquam vestibulum morbi.
        Et ultrices neque ornare aenean euismod elementum nisi. Urna nec
        tincidunt praesent semper feugiat nibh sed pulvinar proin. Enim nec dui
        nunc mattis enim ut tellus. Bibendum enim facilisis gravida neque
        convallis. Sed enim ut sem viverra aliquet eget sit amet tellus. Eros
        donec ac odio tempor orci dapibus. Ullamcorper eget nulla facilisi
        etiam. Quam viverra orci sagittis eu volutpat odio. Malesuada fames ac
        turpis egestas integer eget aliquet. In nibh mauris cursus mattis
        molestie a.
        <br />
        <br /> Varius duis at consectetur lorem donec. Eget nunc scelerisque
        viverra mauris in aliquam sem fringilla ut. Adipiscing elit pellentesque
        habitant morbi tristique senectus et. Hac habitasse platea dictumst
        quisque sagittis purus sit amet volutpat. Aenean sed adipiscing diam
        donec adipiscing tristique risus nec feugiat. Lobortis scelerisque
        fermentum dui faucibus in ornare quam viverra orci. At in tellus integer
        feugiat scelerisque. Pretium nibh ipsum consequat nisl. Felis eget nunc
        lobortis mattis aliquam faucibus purus. Neque egestas congue quisque
        egestas diam in arcu cursus. Eu ultrices vitae auctor eu augue ut lectus
        arcu. Facilisis volutpat est velit egestas dui id ornare. Gravida dictum
        fusce ut placerat orci nulla. Eu sem integer vitae justo eget magna. Ut
        ornare lectus sit amet est placerat. Et ligula ullamcorper malesuada
        proin libero. Commodo elit at imperdiet dui accumsan sit. Et leo duis ut
        diam. Vel eros donec ac odio. Adipiscing elit duis tristique
        sollicitudin nibh sit amet commodo. Integer quis auctor elit sed
        vulputate.
      </p>
    </div>
  );
}

export default About;
