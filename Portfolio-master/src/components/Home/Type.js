import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div translate="no">
      <Typewriter
        options={{
          strings: [
            "Software Developer Student",
            "Technology Enthusiast",
            "Web Development Student",
            "Project-Based Learner",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;