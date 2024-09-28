import Advisor from "@/components/Advisor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhyOracle from "@/components/WhyOracle";

const Home = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto bg-hero bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="max-w-7xl mx-auto bg-advisor bg-cover bg-no-repeat bg-center">
        <Advisor />
      </div>
      <div className="bg-[#EDF8F9] max-w-7xl mx-auto ">
        <WhyOracle />
      </div>
    </div>
  );
};
export default Home;
