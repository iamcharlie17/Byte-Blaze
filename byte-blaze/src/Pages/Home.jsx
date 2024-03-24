import Hero from "../components/Hero";

import wave from "../../Assets/wave.svg"

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-116px)] flex flex-col justify-center items-center relative">
      <Hero></Hero>
      <img src={wave} alt=""  className="absolute bottom-0 w-full"/>
    </div>
  );
};

export default Home;