import React from "react";
import { home } from "../data/dummydata";
import Typewritter from "typewriter-effect";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContent">
            <h3 className="fontSize" data-aos="fade-right">
              {val.text}
            </h3>
            <h1></h1>
          </div>
        ))}
      </section>
    </>
  );
};
