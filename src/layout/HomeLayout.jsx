import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Particles from "react-tsparticles";
import particlesOptions from "../utility/particalOptions";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const HomeLayout = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
    <Particles
        id="tsparticles"
        options={particlesOptions}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <Header />
     <div className=" container mx-auto md:px-8 px-4">
     <Outlet />
     </div>
      <Footer/>
    </>
  );
};

export default HomeLayout;
