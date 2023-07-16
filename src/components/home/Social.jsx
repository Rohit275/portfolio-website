import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram" />
      </a>
      <a
        href="https://dribbble.com/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-dribbble" />
      </a>
      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt" />
      </a>
    </div>
  );
}

export default Social;
