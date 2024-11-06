import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./list.css";

const List = () => {
  const [data, setData] = useState();
  const [more,setMore] = useState(5)

  useEffect(() => {
    const FetchData = async () => {
      const Res = await fetch("https://jsonplaceholder.typicode.com/users");
      const ResDat = await Res.json();
      if (ResDat) {
        setData(ResDat);
      }
    };

    FetchData();
  }, []);

  const VariantBtn = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: [100, 0, 100],
      scale: 1.1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };


  const showmore = () =>{
  setMore(data?.length)
  }

  return (
    <>
      <p>Number of the People List - {data?.length}</p>
      {data?.length == 0 ? (
        <p>Loading....</p>
      ) : (
        data?.slice(0,more).map((d) => {
          return (
            <motion.ul
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "red",
                transition: { type: "tween", duration: 0.5 },
              }}
            >
              <motion.p
                style={{ cursor: "pointer" }}
                variants={VariantBtn}
                initial="hidden"
                animate="visible"
              >
                {d.name}
              </motion.p>
            </motion.ul>
          );
        })
      )}
      <button onClick={showmore}>Click here </button>
    </>
  );
};

export default List;
