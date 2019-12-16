import React from "react";
import "./marketing.css";
import Matt from "./images/Matt.png";
import Alex from "./images/Alex.png";
import banner from "./images/banner.jpeg";
import Breanna from "./images/Breanna.jpeg";
import Derek from "./images/Derek.jpeg";
import Joe from "./images/Joe.png";
import Nicole from "./images/Nicole.png";
import Tim from "./images/Tim.jpeg";
import Tobias from "./images/Tobias.png";
import Vera from "./images/Vera.jpeg";
import Maxime from "./images/Maxime.jpeg";

const AboutPage = () => {
  return (
    <div>
      <div class="cta">
        <h1>Our Team:</h1>
      </div>
      <div class="about">
        <div class="team_member">
          <img class="tmphoto" src={Matt} alt="photo of Matthew Kirby" />
          <p>Project Lead</p>
          <p>Matthew Kirby</p>
        </div>
        <div class="team_member">
          <img class="tmphoto" src={Breanna} alt="photo of Breanna Burns" />
          <p>UX Designer</p>
          <p>Breanna Burns</p>
        </div>
        <div class="team_member">
          <img class="tmphoto" src={Derek} alt="photo of Derek Dyer" />
          <p>Web UI Developer</p>
          <p>Derek Dyer</p>
        </div>
        <div class="team_member">
          <img class="tmphoto" src={Tim} alt="photo of Tim Griffith" />
          <p>Frontend Developer</p>
          <p>Tim Griffith</p>
        </div>
        <div class="team_member">
          <img class="tmphoto" src={Nicole} alt="photo of Nicole Adams" />
          <p>Frontend Developer</p>
          <p>Nicole Adams</p>
        </div>
        <div class="team_member">
          <img class="tmphoto" src={Joe} alt="photo of Joseph Lambert" />
          <p>Backend Developer</p>
          <p>Joseph Lambert</p>
        </div>
        <div class="team_member">
          <img class="tmphoto" src={Vera} alt="photo of Vera Mendes" />
          <p>Data Engineer</p>
          <p>Vera Mendes</p>
        </div>
        <div class="team_member">
          <img class="tmphoto" src={Tobias} alt="photo of Tobias Reaper" />
          <p>Data Engineer</p>
          <p>Tobias Reaper</p>
        </div>
        <div class="team_member">
          <img class="tmphoto" src={Alex} alt="photo of Alex Gerwer" />
          <p>Data Engineer</p>
          <p>Alex Gerwer</p>
        </div>
        <div class="team_member">
          <img
            class="tmphoto"
            src={Maxime}
            alt="photo of Maxime Vacher-Materno"
          />
          <p>Machine Learning</p>
          <p>Maxime Vacher-Materno</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
