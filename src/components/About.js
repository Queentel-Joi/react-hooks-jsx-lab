import React from "react";
import { image } from "../data/data"; // ✅ updated from user.js → data.js

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love creating awesome user interfaces with React!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;


