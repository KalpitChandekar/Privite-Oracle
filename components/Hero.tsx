import { winterInsight } from "@/app/layout";

const Hero = () => {
  return (
    <div className={`${winterInsight.className} max-w-6xl mx-auto py-32`}>
      <div className="max-w-80 mr-auto text-center md:ml-10">
        <h1 className="text-8xl text-[#FF9F00]">find your peace</h1>
        <p className="text-2xl tracking-wider pt-6 pb-2">
          Insight to nourish your spiritual path
        </p>
        <h2 className="text-4xl font-yrsa text-[#FF9F00]">$1/min*</h2>
      </div>
    </div>
  );
};
export default Hero;
