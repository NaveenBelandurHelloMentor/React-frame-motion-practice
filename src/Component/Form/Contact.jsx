import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    const formData = {
      username,
      password,
      email,
    };

    setData(formData);
    setIsFormVisible(false); // Hide form on submit
  };

  return (
    <>
      <AnimatePresence>
        {isFormVisible && (
          <motion.form
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 50 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <label>UserName</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Display the submitted data */}
      <AnimatePresence>
        {!isFormVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p>Username: {data.username}</p>
            <p>Password: {data.password}</p>
            <p>Email: {data.email}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
