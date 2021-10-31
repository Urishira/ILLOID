import React, { useState, useEffect } from "react";
import { motion, AnimationProps } from "framer-motion";

type BannerProps = {
  title: string[];
  disabled?: boolean;
  playMarquee?: boolean;
} & AnimationProps;

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setPlayMarquee(true);
  }, []);
  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={["brand"]} />
      <BannerRowCenter title={["experience"]} disabled={playMarquee} />
      <BannerRowBottom title={["Developer"]} />
    </motion.div>
  );
};

const AnimatedLetters: React.FC<BannerProps> = ({
  title,
  disabled,
  ...props
}) => (
  <motion.span
    {...props}
    className="row-title"
    variants={disabled ? banner : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, i) => (
      <motion.span key={i} className="row-letter" variants={letterAnimation}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="row-col"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
      >
        <span className="row-message">
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
        className="scroll"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} disabled />
    </div>
  );
};

const BannerRowCenter: React.FC<BannerProps> = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};
