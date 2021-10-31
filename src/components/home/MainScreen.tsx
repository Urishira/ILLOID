import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Banner, Header, Loader } from "../../ui";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  src={`/images/image-2.jpg`}
                  layoutId="main-image-1"
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default HomeScreen;
