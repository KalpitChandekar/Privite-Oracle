import Advisor from "@/components/Advisor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

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
    </div>
  );
};
export default Home;
