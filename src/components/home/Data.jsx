import React from "react";

import { ReactComponent as SendIcon } from "../../assets/send.svg";
import { ReactComponent as Hand } from "../../assets/hand.svg";

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">Rohit A{/* <Hand /> */}</h1>
      {/* <hr /> */}
      <h3 className="home__subtitle">Full Stack Developer</h3>
      <p className="home__description">
        I'm creative designer based in New York, and I'm very passionate and
        dedicated to my work.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <SendIcon />
      </a>
    </div>
  );
}

export default Data;
