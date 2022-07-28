import Sayur from "../components/Sayur";
import Popular from "../components/Popular";
import {motion} from 'framer-motion';

import React from 'react'

function Home() {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      ext={{opacity: 0}}
      transition={{duration: 1}}
    >
        <Sayur />
        <Popular />
    </motion.div>
  );
}
  
export default Home;