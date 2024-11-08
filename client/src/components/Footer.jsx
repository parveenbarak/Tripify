import React from "react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Youtube } from "lucide-react";
import { Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
const Footer = () => {
  return (
    <div>
      <div className="footer text-white ">
        <div className="p-14 bg-cyan-600">
          <div className="flex gap-8 justify-center cursor-pointer  ">
            <Linkedin />
            <Github />
            <Youtube />
            <Twitter />
          </div>
          <div className="flex font-bold  justify-center cursor-pointer  gap-12 pt-4 mb-5">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <Separator />
          <div className="mt-5">Designed by Parveen Barak © 2024. All rights reserved.</div>
        </div>
       
      </div>
      
    </div>
  );
};

export default Footer;
