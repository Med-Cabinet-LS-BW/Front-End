import React from "react";
import marketing from "./marketing.css";
import Header from "../Layouts/Header";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div class="sign_up">
        <p>Medicate, </p>
        <p>Then Meditate</p>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
      <div class="cta">
        <h2>How it works:</h2>
      </div>
      <div class="bottom_content">
        <div class="bottom_p">
          <h2>Find the right strain</h2>
          <p>
            Discover strains based on attributes like effects and conditions.
            Save strains you like and add tags to them.
          </p>
        </div>
        <div class="bottom_p">
          <h2>Determine the right dosage</h2>
          <p>
            Treatments include a 5-minute meditation after you've medicated to
            help you determine the right dosage for your treament.
          </p>
        </div>
        <div class="bottom_p">
          <h2>Create a treatment plan</h2>
          <p>
            Explore strains based on desired effects or medicinal uses. Favorite
            strains that interest you.
          </p>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};

export default LandingPage;
