import React from "react";
import { CheckCheck, Heart, MessageCircle } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="flex text-center flex-col items-center justify-center">
    <div className="bg-[#09B3B0] mb-4 rounded-full p-3">
      <Icon size={40} className="text-white" />
    </div>
    <h2 className="text-2xl text-[#09B3B0]">{title}</h2>
    <p className="text-sm">{description}</p>
    <h3 className="text-[#09B3B0] mt-4">Read More</h3>
  </div>
);

const FAQs = () => (
  <div className="mt-20">
    <h1 className="text-center mb-10 text-4xl">
      Love, Relationship, and Life FAQs
    </h1>
    <p className="">
      You've finally decided to take the leap and talk to a psychic (great!),
      but perhaps you're still feeling a bit confused about online readings,
      whether or not they are safe, or how to choose the best Keen psychic to
      meet your needs. We're here to put your mind at ease so that you can get
      the most out of your reading - every single time.
    </p>
    <ul className=" my-6 grid grid-cols-2 gap-4 text-[#008080]">
      <li>
        <a href="/">How do I know someone is thinking about me?</a>
      </li>
      <li>
        <a href="/">What do I need to know before my first reading?</a>
      </li>
      <li>
        <a href="/">How do I get through a breakup?</a>
      </li>
      <li>
        <a href="/">What are the different types of psychic readings??</a>
      </li>
      <li>
        <a href="/">How do I get the best reading?</a>
      </li>
      <li>
        <a href="/">How can I start a reading for free?</a>
      </li>
    </ul>
    <div className="flex justify-center items-center">
      <button className="py-2 w-36 text-[#09B3B0] border-[#09B3B0] border-2 rounded-lg">
        Reading 101
      </button>
    </div>
  </div>
);

const WhyOracle = () => {
  const features = [
    {
      icon: Heart,
      title: "Best Online Psychics",
      description:
        "The quality of our psychic mediums is unmatched. Applicants must go through a rigorous screening process and an intensive background search, which means you can be sure that our team of gifted psychic advisors is the very best of the best.",
    },
    {
      icon: MessageCircle,
      title: "Real Psychic Reviews",
      description:
        "Did you know that all of our psychic reviews are testimonials from actual clients? Read about the positive experiences of others and treat yourself to a psychic reading with one of our accurate psychic advisors.",
    },
    {
      icon: CheckCheck,
      title: "Satisfaction Guaranteed",
      description:
        "We've delivered over 5 million discreet and confidential psychic readings since 1995, and we're here for you 24/7/365. A powerful psychic connection is just a call away. Plus, if it's not the very best psychic reading you've ever had, it's FREE!",
    },
  ];

  return (
    <div className="py-14 max-w-4xl mx-auto">
      <h1 className="text-center mb-14 text-5xl uppercase">
        why private oracle?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <FAQs />
      <FAQs />
      <FAQs />
    </div>
  );
};

export default WhyOracle;
