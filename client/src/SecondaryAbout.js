import React from "react";
import talvesteel from "./talvesteel.jpg";

function SecondaryAbout() {
  return (
    <div className="sec_about">
      <h1 className="who">Lorem Ipsum Dolor</h1>
      <div className="para_hold">
        <div className="paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
            feugiat pretium nibh ipsum consequat nisl vel. Non quam lacus
            suspendisse faucibus interdum posuere lorem ipsum. Purus viverra
            accumsan in nisl nisi scelerisque eu. Volutpat consequat mauris nunc
            congue nisi vitae. Tempus egestas sed sed risus pretium quam
            vulputate dignissim suspendisse. Leo integer malesuada nunc vel
            risus commodo viverra maecenas accumsan. Adipiscing vitae proin
            sagittis nisl rhoncus mattis rhoncus. Varius vel pharetra vel turpis
            nunc. Ultricies mi quis hendrerit dolor magna eget est lorem. Ornare
            arcu dui vivamus arcu felis. Sit amet luctus venenatis lectus magna
            fringilla urna porttitor rhoncus. Erat nam at lectus urna duis
            convallis convallis. Adipiscing tristique risus nec feugiat in.
            Feugiat in ante metus dictum at. Suspendisse interdum consectetur
            libero id faucibus nisl tincidunt. Rhoncus dolor purus non enim
            praesent elementum.
          </p>
           {" "}
          <p>
            Viverra maecenas accumsan lacus vel facilisis volutpat est velit
            egestas. Morbi tempus iaculis urna id volutpat lacus laoreet.
            Porttitor leo a diam sollicitudin. Sed velit dignissim sodales ut eu
            sem integer vitae. Est velit egestas dui id ornare. Rhoncus mattis
            rhoncus urna neque viverra justo. Porttitor massa id neque aliquam
            vestibulum morbi. Et ultrices neque ornare aenean euismod elementum
            nisi. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar
            proin. Enim nec dui nunc mattis enim ut tellus. Bibendum enim
            facilisis gravida neque convallis. Sed enim ut sem viverra aliquet
            eget sit amet tellus. Eros donec ac odio tempor orci dapibus.
            Ullamcorper eget nulla facilisi etiam. Quam viverra orci sagittis eu
            volutpat odio. Malesuada fames ac turpis egestas integer eget
            aliquet. In nibh mauris cursus mattis molestie a.
          </p>
        </div>
      </div>
      <img className="citygif" src={talvesteel} alt="steel" />
    </div>
  );
}

export default SecondaryAbout;
