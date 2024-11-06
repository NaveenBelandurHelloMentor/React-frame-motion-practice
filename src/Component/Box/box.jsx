import React from "react";
import { easeIn, motion } from "framer-motion";
import { useState } from "react";
import "./box.css";

const Box = () => {
  const [rotate, setRotate] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const TransformVariant = {
    hidden: {
      x: 0,
      scale: 1.1,
    },
    visible: {
      x: Number(left),
      y: Number(right),
      rotate: Number(rotate),
      transition: {
        type: "spring",
        easeIn: easeIn,
      },
    },
  };

  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          variants={TransformVariant}
          initial="hidden"
          animate="visible"
        ></motion.div>

        <div className="range_container">
          <input
            type="range"
            value={left}
            onChange={(e) => setLeft(e.target.value)}
          />
          <input
            type="range"
            value={right}
            onChange={(e) => setRight(e.target.value)}
          />
          <input
            type="range"
            value={rotate}
            onChange={(e) => setRotate(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Box;
