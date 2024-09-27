import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="">
      <div className="bg-hero bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};
export default Home;
