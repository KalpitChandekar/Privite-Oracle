import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#09B3B0] max-w-7xl mx-auto py-10">
      <div className="flex justify-between max-w-5xl mx-auto text-white">
        <div className="w-3/5">
          <div className="flex gap-4 items-center">
            <Image src="/footer.png" alt="logo" width={102} height={63} />
            <div>
              <h1 className="text-2xl">Private Oracle</h1>
              <Link href="/" className="text-sm">www.privateoracle.com</Link>
            </div>
          </div>
          <h1 className="mb-6 text-sm mt-4">Copyright © 2024 · Private Oracle ·</h1>
          <div className="flex uppercase gap-4">
            <h1>privacy policy</h1>
            <span className="">|</span>
            <h1>terms and conditions</h1>
            <h1>contact</h1>
          </div>
        </div>
        <div className="w-2/5">
          <h1 className="text-2xl">Keep in Touch</h1>
          <div className="flex gap-3 mt-4 mb-6">
            <Facebook />
            <Instagram />
            <Twitter />
            <Youtube />
            <Github />
            <Linkedin />
          </div>
          <p className="text-sm">
            You must be of legal adult age as per your country’s requirements to
            use this service. Please note this service is for entertainment
            purposes only, you are responsible for all your life decision.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
