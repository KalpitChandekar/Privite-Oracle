import { Mail, MessageSquareMore, Phone } from "lucide-react";
import Image from "next/image";

const Advisor = () => {
  return (
    <div className="pb-12">
      <div className="bg-[#09B3B0] max-w-7xl mx-auto">
        <h1 className="p-4 text-4xl text-center text-white">
          Find Your Best Psychic Advisor
        </h1>
      </div>

      <div>
        <div className="max-w-4xl mx-auto my-10">
          <div className="flex justify-between items-center ">
            <div className="flex gap-6">
              <Image
                src="/advisor1.png"
                alt="Psychic Advisor"
                width={150}
                height={150}
                className="rounded-xl"
              />
              <div className="max-w-md mx-auto">
                <h1 className="text-lg mb-4 text-[#09B3B0]">Merry Healer</h1>
                <p className="text-sm">
                  help with all matters of life. Such as Love Health happiness,
                  and Career. I will also give you, sense of direction. I am a
                  Life coach, My readings come directly from the heart I do not
                  sugarcoat, I am nonjudgmental. all of my readings are private
                  and confidential. I will lead you and guide you to your
                  heart's desires.
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="bg-[#09B3B0] text-white px-4 py-1 rounded-md text-sm">
                First 3 Minutes Free
              </h1>
              <h1 className="my-1 text-center">$4.99/min</h1>
              <div className="flex cursor-pointer gap-2 rounded-md items-center justify-center py-2 text-white bg-[#FF9F00] mb-2">
                <Phone />
                <h1>Call Now</h1>
              </div>
              <div className="flex cursor-pointer gap-2 rounded-md items-center justify-center py-2 text-white bg-[#09B3B0]">
                <MessageSquareMore />
                <h1>Chat Later</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center ">
            <div className="flex gap-6">
              <Image
                src="/advisor2.png"
                alt="Psychic Advisor"
                width={150}
                height={150}
                className="rounded-xl"
              />
              <div className="max-w-md mx-auto">
                <h1 className="text-lg mb-4 text-[#09B3B0]">
                  Super Love Advisor
                </h1>
                <h2>Improve your life today</h2>
                <p className="text-sm mt-2">
                  I'm proud to say that I have guided many clients to their
                  financial breakthrough and overall happiness. I've lead many
                  on the right career path as well as helped them through every
                  difficult time.
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="bg-[#09B3B0] text-white px-4 py-1 rounded-md text-sm">
                First 3 Minutes Free
              </h1>
              <h1 className="my-1 text-center">$3.99/min</h1>
              <div className="flex cursor-pointer gap-2 rounded-md items-center justify-center py-2 text-[#FF9F00] border-2 border-[#FF9F00] mb-2">
                <Mail />
                <h1>Sent Mail</h1>
              </div>
              <div className="flex cursor-pointer gap-2 rounded-md items-center justify-center py-2 text-white bg-[#09B3B0]">
                <MessageSquareMore />
                <h1>Chat Later</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto my-10">
          <div className="flex justify-between items-center ">
            <div className="flex gap-6">
              <Image
                src="/advisor3.png"
                alt="Psychic Advisor"
                width={150}
                height={150}
                className="rounded-xl"
              />
              <div className="max-w-md mx-auto">
                <h1 className="text-lg mb-4 text-[#09B3B0]">Psychic Althea</h1>
                <h2>Keen's Amazing Psychic Astrologer RexFrederick</h2>
                <p className="text-sm mt-2">
                  Hello Keen clients! My name is Rex! Quick, friendly, fun, and
                  Accurate! Over 60,000 readings here on Keen! Love, Marriage,
                  Finance and Your Well Being! I'm here to serve your every
                  need! Detailed w/Real understanding!
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="bg-[#09B3B0] text-white px-4 py-1 rounded-md text-sm">
                First 3 Minutes Free
              </h1>
              <h1 className="my-1 text-center">$3.99/min</h1>
              <div className="flex cursor-pointer gap-2 rounded-md items-center justify-center py-2 text-white bg-[#FF9F00] mb-2">
                <Phone />
                <h1>Call Now</h1>
              </div>
              <div className="flex cursor-pointer gap-2 rounded-md items-center justify-center py-2 text-white bg-[#09B3B0]">
                <MessageSquareMore />
                <h1>Chat Later</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 flex gap-10 justify-center relative max-w-4xl mx-auto">
        <button className="text-center rounded-md w-52 items-center justify-center py-2 text-white bg-[#09B3B0]">
          See More Advisors
        </button>
        <button className="text-center rounded-md w-52 items-center justify-center py-2 text-white bg-[#FF9F00]">
          Get Matched
        </button>
        <Image
          src="/arrowFrame.png"
          alt="Advisor"
          width={150}
          height={50}
          className="absolute top-0 right-24 w-28"
        />
      </div>
    </div>
  );
};
export default Advisor;
