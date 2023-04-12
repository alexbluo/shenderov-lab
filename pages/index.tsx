import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AlumniSection from "../components/AlumniSection";
import Footer from "../components/Footer";
import FrontSection from "../components/FrontSection";
import NavBar from "../components/NavBar";
import NewsSection from "../components/NewsSection";
import PublicationsSection from "../components/PublicationsSection";
import ResearchSection from "../components/ResearchSection";
import TeamSection from "../components/TeamSection";

const Home: NextPage = () => {
  const [y, setY] = useState(0);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setY(latest);
    });
  }, [scrollYProgress]);

  return (
    <>
      <Head>
        <title>Shenderov Lab</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-raisin">
        <NavBar />
        <div
          ref={containerRef}
          style={{ opacity: 1 - y }}
          className="absolute top-0 left-0 h-screen w-screen"
        >
          <Image
            src="/spatial.jpg"
            alt="placeholder"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <main>
          <FrontSection />
          <ResearchSection />
          <TeamSection />
          <AlumniSection />
          <NewsSection />
          <PublicationsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
