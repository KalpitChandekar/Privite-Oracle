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
    <div className="py-14 max-w-6xl mx-auto">
      <h1 className="text-center mb-14 text-5xl uppercase">
        why private oracle?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default WhyOracle;